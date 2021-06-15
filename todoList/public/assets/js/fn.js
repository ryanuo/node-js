// 启动时加载
function fn() {
	$.ajax({
		url: '/todo',
		type: 'get',
		success: (res) => {
			let html = template('list', { listData: res })
			$('.todo-list').html(html)
		}
	})
}
fn()
// 增加数据
$('.new-todo').on('keyup', (res) => {
	if (res.keyCode == 13) {
		let value = $('.new-todo').val().trim()
		data = { task: value }
		if (value.length !== 0) {
			$.ajax({
				url: '/add',
				type: 'post',
				data: data,
				success: (res) => {
					if (res.code == 1) {
						$('.new-todo').val('')
						fn()
					}
				}
			})
		}
	}
})
// 删除数据(jquery页面监听 加载完成后可继续监听)
$(document).on('click', '.destroy', function () {
	let task = $(this).prev('label').text()
	$.ajax({
		url: '/del',
		type: 'post',
		data: {
			task: task
		}, success: (res) => {
			// console.log(res);
			if (res.code == 1) {
				fn()
			}
		}
	})
})

// 更新数据
$(document).on('dblclick', '.dbl', function () {
	let value = $(this).text()
	let _id = $(this).data('id')
	$(this).parent(".view").next().css({ "display": "block" }).val(value)
	$(this).parent(".view").css({ "display": "none" })
	$(document).on('change', '.edit', function (res) {
		let values = $(this).val()
		$(this).prev('.view').css({ "display": "block" }).children('.dbl').text(values)
		$(this).css({ "display": "none" })
		if (values.trim().length != 0) {
			$.ajax({
				url: '/update',
				type: 'post',
				data: {
					task: values,
					id: _id
				},
				success: (res) => {
					if (res.code == 1) {
						fn()
					}
				}
			})
		}
	})
})
