const Item = require('../models/list-model')

getList = async (req, res) => {
    await Item.find({}, (err, list) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: list })
    }).clone().catch(err => console.log(err))
}

createItem = (req, res) => {

}

deleteItem = (req, res) => {

}

module.exports = {
    getList,
    createItem,
    deleteItem
}