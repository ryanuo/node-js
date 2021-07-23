// let page = 1; // 默认的页码为0
let currentPage = 1;
let totalPages;  // 定义总页数
// 监听页码的点击事件
// 页面加载时调用,执行页面的渲染
function fn(page) {
    $.ajax({
        type: "get",
        url: `/posts?page=${page}`,
        success: function (res) {
            console.log(res);
            let html = template('listTpl', { dataList: res })
            $('#list_data_article').html(html)
            let html1 = template('list_display', { dataList: res })
            $("#page_tog").html(html1)
            totalPages = res.pages
        }
    });
}
fn(1)
// 点击页码时执行
$('#page_tog').on('click', '#page_id', function () {
    let page = $(this).text()
    console.log(page);
    currentPage = page
    fn(page)
})
// 切换上一页
$('#page_tog').on('click', '#prew_page', function () {
    if (currentPage == 1) {
        console.log('已经到第一页无点击到上一页!!');
    } else {
        currentPage--;
        let page = currentPage
        console.log(page);
        fn(page)
    }
})

// 切换下一页
$("#page_tog").on('click', '#next_page', function () {
    if (currentPage == totalPages) {
        console.log('已经到达最后一页');
    } else {
        currentPage++;
        let page = currentPage
        console.log(page);
        fn(page)
    }
})

// 根据分类筛选列表
$('#Classification').on('submit', function () {
    let formData = $(this).serializeArray()
    // 将数据展示出来 并对传入的数据进行判断
    let state = formData.filter(v => v.name == 'state')[0].value
    let title = formData.filter(v => v.name == 'title')[0].value
    let key = `${state}-${title}`
    if (state.length == 0 && title.length == 0) {
        console.log({ message: '请选择后查询' });
        return false;
    }
    $.ajax({
        type: "post",
        url: `/posts/${key}`,
        success: function (res) {
            console.log(res);
        }
    });
    // 阻止默认的提交行为
    return false;
})

// 执行分类列表的展示
$.ajax({
    type: "get",
    url: "/categories",
    success: function (res) {
        console.log(res);
        let html = template('cate_tpl', { list_items: res })
        $('#cate_list').html(html)
    }
});


