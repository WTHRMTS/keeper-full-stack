const Item = require('../models/list-model')

getList = async (req, res) => {
    await Item.find({}, (err, list) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: list })
    }).clone().catch(err => console.log(err))
}

getLatest = async (req, res) => {
    // console.log(req.params.title);
    res.render('/');
    // await Item.find({}, (err, list) => {
    // // await Item.findOne({}, {},{ sort: { 'created_at' : -1 } }, (err, note) => {
    //     if (err) {
    //         return res.status(400).json({ success: false, error: err })
    //     }
    //     return res.status(200).json({ success: true, data: list })
    // }).clone().catch(err => console.log(err))
}
createItem = (req, res) => {
    const body = req.body
    // console.log(req.body)
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide an item',
        })
    }

    const item = new Item(body)

    if (!item) {
        return res.status(400).json({ success: false, error: err })
    }

    item
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: item._id,
                message: 'Item created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Item not created!',
            })
        })
}

deleteItem = (req, res) => {
    const postId = req.params
    console.log(postId.id)
    Item.findOneAndDelete({ _id: req.params.id }, (err, item) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        // if (!item) {
        //     return res
        //         .status(404)
        //         .json({ success: false, error: `Item not found` })
        // }
        return res.status(200).json({ success: true, data: req.params })
    }).clone().catch(err => console.log(err))
}

module.exports = {
    getList,
    getLatest,
    createItem,
    deleteItem
}