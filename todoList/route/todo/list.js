const { todoList } = require('../../model/db.js')
module.exports = async (req, res) => {
    let {completed} = req.query
    if(JSON.stringify(req.query)!=="{}"){
        let results = await todoList.find({completed:completed})
        res.send(results)
    }else{
        let results = await todoList.find()
        res.send(results)
    }
}