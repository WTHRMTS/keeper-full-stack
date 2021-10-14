
const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema ({
    name: String
})

const Item = new mongoose.model("Item", itemsSchema);

const item1 = new Item({
    name: "Welcome to your to-do list"
});

const item2 = new Item({
    name: "Hit the + button to add a new item."
});

const item3 = new Item({
    name: "<== Hit this to delete an item."
});

const defaultItems = [item1, item2, item3];

const listSchema = new mongoose.Schema ({
    name: String,
    items: [itemsSchema]
});

module.exports = mongoose.model("List", listSchema);