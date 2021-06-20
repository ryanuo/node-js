$('#form-data').on('submit', function () {
    // alert('123')
    let formData = $(this).serialize();
    // console.log(formData);
    $.ajax({
        type: "post",
        url: "/users",
        data: formData,
        success: function (response) {
            location.reload()
        },
        error: (err) => {
            alert(JSON.parse(err.responseText).message)
        }
    });
    // 阻止表单的默认提交行为
    return false
})
// 图片上传
$('.form_user').on('change', '#avatar', function () {
    var formData = new FormData();
    formData.append('avatar', this.files[0])
    $.ajax({
        type: 'post',
        url: '/upload',
        data: formData,
        processData: false,
        contentType: false,
        success: (res) => {
            // 设置属性的值
            $('.form-image img').prop({ "src": res[0].avatar })
            $('#hideAvatar').val(res[0].avatar)
        }
    })
})

$.ajax({
    type: "get",
    url: "/login/status",
    success: function (res) {
        console.log(res);
        if (res.code == 1) {
            // 获取用户列表
            $.ajax({
                type: "get",
                url: "/users",
                success: function (res) {
                    // console.log(res);
                    // 将获取的数据渲染到页面中
                    let html = template('tpl', { data_users: res })
                    $('#today_user').html(html)
                }
            });
        }else{
            location.href = '/admin/login.html'
        }
    }
});

// 使用事件委托的方法 编辑事件 事件冒泡
$('#today_user').on('click', '#exit', function () {
    // 获取用户点击的用户id的值
    let id = $(this).data('id')
    // 使用id的值进行数据库的查询
    $.ajax({
        type: "get",
        url: `/users/${id}`,
        success: function (res) {
            let html = template('modifyuser', res)
            $('.form_user').html(html)
        }
    });
})

// 在进行修改用户信息时
$('.form_user').on('submit', '#modeify_user', function () {
    let formData = $(this).serialize();
    let id = $(this).data('id')
    // console.log(formData);
    $.ajax({
        type: "put",
        url: `/users/${id}`,
        data: formData,
        success: function (response) {
            location.reload()
            // console.log(response);
        },
        error: (err) => {
            alert(JSON.parse(err.responseText).message)
        }
    });
    // 阻止表单的默认提交行为
    return false
})

// 使用事件委托的方法 删除 事件冒泡
$('#today_user').on('click', '#del_user', function () {
    // 获取用户点击的用户id的值
    let id = $(this).data('id')
    // 使用id的值进行数据库的查询
    let conF = confirm('您确定要删除该用户？')
    if (conF) {
        $.ajax({
            type: "delete",
            url: `/users/${id}`,
            success: function (res) {
                location.reload()
            }
        });
    }
})

// 全选按钮事件也使用事件委托的方法
$('#checkstatus').on('change', '.checkAll', function () {
    // 获取当前check的选中状态
    let status = $(this).prop('checked')
    $('#today_user').find('input').prop('checked', status)
    if (status) {
        $('#deleMany').css('display', 'inline-block')
    } else {
        $('#deleMany').css('display', 'none')
    }
})

// 选中check影响全选按钮
$('#today_user').on('change', '.checkedone', function () {
    let selectAll = $('#today_user .checkedone')
    // 根据长度来判断段
    // console.log(selectAll.length);df
    if (selectAll.length == selectAll.filter(":checked").length) {
        $('.checkAll').prop('checked', true)
    } else {
        // console.log(selectAll);
        $('.checkAll').prop('checked', false)
    }
    if (selectAll.filter(":checked").length > 0) {
        $('#deleMany').css('display', 'inline-block')
    } else {
        $('#deleMany').css('display', 'none')
    }
})

// 点击批量删除按钮
$('#deleMany').on('click', function () {
    let ids = [];
    let itemAll = $('#today_user .checkedone').filter(":checked");
    itemAll.each((index, item) => {
        // 将获取到的id值push到ids数组中
        // console.log($(item));
        ids.push($(item).data("id"))
        // $(item).data(id)
    })
    if (ids.length !== 0) {
        if (confirm('确定删除选中的所有用户的信息？')) {
            $.ajax({
                type: "delete",
                url: `/users/${ids.join('-')}`,
                success: function (res) {
                    // console.log(res);
                    location.reload()
                }
            });
        }

    }
})

