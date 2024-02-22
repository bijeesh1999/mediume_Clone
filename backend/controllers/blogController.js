// itemsController.js

// const blog =require("../mongoDb/models/blogSchema")

const itemsService = require('../services/blogService');

async function createItem(req, res) {
    const newItem = req.body;
    const createdItem = await itemsService.createItem(newItem);
    res.json(createdItem);
}

async function getItems(req, res) {
    const items = await itemsService.getItems();
    console.log(items);
    res.json(items);
}

async function getItemById(req, res) {
    const itemId = req.params.id;
    const item = await itemsService.getItemById(itemId);
    if (item) {
        res.json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
}

async function updateItem(req, res) {
    const itemId = req.params.id;
    const updatedItem = req.body;
    const success = await itemsService.updateItem(itemId, updatedItem);
    if (success) {
        res.json({ message: 'Item updated successfully' });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
}

async function deleteItem(req, res) {
    const itemId = req.params.id;
    const success = await itemsService.deleteItem(itemId);
    if (success) {
        res.json({ message: 'Item deleted successfully' });
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
}

module.exports = {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
};


// const getAllBlogs = async(req,res) =>{
//     const all=await blog.find({})
//     console.log(all);
// }

// module.exports={getAllBlogs}