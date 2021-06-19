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
$('#form-data').on('change','#avatar', function () {
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
            $('#form-data').html(html)
        }
    });
})

// 在进行修改用户信息时
$('#form-data').on('submit',function(){
    
})