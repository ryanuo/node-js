$.ajax({
    type: "get",
    url: "/categories",
    success: (res) => {
        // console.log(res);
        let html = template('selectedtpl', { data_list: res })
        $('#category').html(html)
    }
});

// 当用户选择文件时触发
$('#feature').on('change', function () {
    let files = this.files[0]
    //    创建formDat对象，实现二进制文件的上传
    let formData = new FormData()
    formData.append('cover', files)
    $.ajax({
        type: "post",
        url: "/upload",
        data: formData,
        // 不处理data属性对应的参数,不设置参数类型
        contentType: false,
        processData: false,
        success: function (res) {
            console.log(res);
            let CoverUrl = res[0].cover
            $('#cover_warp').val(CoverUrl)
        }
    });
})



// 监听文章的提交
$('#article_post').on('submit', function (res) {
    // 阻止表单的默认行为
    // console.log(res);
    var formData = $(this).serialize()
    console.log(formData);
    $.ajax({
        type: "post",
        url: "/posts",
        data: formData,
        success: (res)=> {
            console.log(res);
        }
    });
    return false;
})

listenUrl()
// 监听跳转的链接地址
function listenUrl(){
    // 将id提取出来
    let id = window.location.href.split('$')[1]
    console.log(id);
}