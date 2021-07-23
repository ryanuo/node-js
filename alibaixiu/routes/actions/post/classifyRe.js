// 用户模块
const { Post, validateCategory } = require('../../../model/Post');

module.exports = async (req, res) => {
    // 查询用户信息
    const { key } = req.params;
    // 将传入的值进行分析
    let state = key.split('-')[0]
    let title = key.split('-')[1]
    let post = {};
    console.log(state,title);
    if (state.length !== 0 && title.length !== 0) {
        post = await Post.find({ state }).populate({
            path: 'categories',//关联的结合
            // match: { age: { $gte: 21 }},//条件
            match: { title }//条件
        }).exec();
    }
    else if (state.length !== 0 && title.length == 0) {
        post = await Post.find({ state })
    }
    else if (state.length == 0 && title.length !== 0) {
        post = await Post.find().populate({
            path: 'categories',//关联的结合
            // match: { age: { $gte: 21 }},//条件
            match: { title },//条件
            select: 'title -_id',//去掉_id属性，选择name
            // options: { limit: 5 }//分页
        }).exec();
    } else {
        post = {
            message: '查询失败,请选择好后在进行查询'
        }
    }
    // 响应 文章分类存在
    return res.send(post);

}