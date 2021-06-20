
// 增加文章的分类
$('#cate_form').on('submit', function () {
    // 获取用户提交的值
    let formData = $(this).serialize();
    // 获取后发送请求
    $.ajax({
        type: "post",
        url: "/categories",
        data: formData,
        success: function (res) {
            // console.log(res);
            location.reload()
        }
    });
    return false
})

// 获取分类的列表
$.ajax({
    type: "get",
    url: "/categories",
    success: function (res) {
        let html = template('tpl-cate', { cateData: res })
        $('#cate-item').html(html)
    }
});

// 更新分类展示
$('#cate-item').on('click', '#exit-cate', function () {
    let id = $(this).data("id")
    $.ajax({
        type: "get",
        url: `/categories/${id}`,
        success: function (res) {
            // console.log(res);
            let html = template('cate-modify', res)
            $('#form_cate_modify').html(html)
        }
    });
})

// 更新分类并且提交
$('#form_cate_modify').on('submit', '#cate_mod', function () {
    let formData = $(this).serialize()
    let id = $(this).data('id')
    console.log(formData);
    $.ajax({
        type: "put",
        url: `/categories/${id}`,
        data: formData,
        success: function (res) {
            // console.log(res);
            location.reload()
        }
    });
    return false;
})


// 删除分类

$('#cate-item').on('click','#del-cate',function(){
    let id = $(this).data('id')
    if(confirm('您确定要删除当前的类别？？')){
        $.ajax({
            type: "delete",
            url: "/categories/"+id,
            success: function (res) {
                location.reload()
            }
        });
    }
})

// 批量删除分类
$('.hd-check').on('change','.checkAll',function(){
    let status = $(this).prop('checked')
    $('#cate-item').find('input').prop('checked',status)
    if(status){
        $('#del_all').show()
    }else{
        $('#del_all').hide()
    }
})

// 单个check框控制总的checked

$('#cate-item').on('change','.onechecked',function(){
    // $('.onechecked')
    // console.log($('.onechecked').length)
    if($('.onechecked').length == $('.onechecked').filter(':checked').length){
        $('.checkAll').prop('checked',true)
    }else{
        $('.checkAll').prop('checked',false)
    }
    if($('.onechecked').filter(':checked').length>0){
        $('#del_all').show()
    }else{
        $('#del_all').hide()
    }
})

// 监听批量删除事件
$("#del_all").on('click',function(){    
    let arr = []
    // 对选中的checked状态框进行遍历
    let checked_all = $(".onechecked").filter(':checked')
    checked_all.each((index,item)=>{
        arr.push($(item).data('id'))
    })
    if(confirm('您确定要删除当前的类别？')){
        if(arr.lenght!==0){
            $.ajax({
                type: "delete",
                url: "/categories/"+arr.join('-'),
                success: function (res) {
                    location.reload()
                }
            });
        }
    }
})

