const { todoList } = require('../../model/db.js')
module.exports = async (req, res) => {
    let results = await todoList.find()
    res.send(results)
}