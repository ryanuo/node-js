module.exports = async (req, res) => {
	if (req.session && req.session.userInfo && req.session.userInfo.role == 'admin') {
		// const s = `var isLogin = true; var userId=\"${req.session.userInfo._id}\"`
		// res.send(s)
		res.send({message:'登录成功',code:1})
	}else {
		// res.send('var isLogin = false')
		// 未登录跳转到登录页面
		res.redirect('/admin/login.html')
	}
};
