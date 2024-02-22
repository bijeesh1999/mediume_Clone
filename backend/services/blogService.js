// itemsService.js

const blog=require("../mongoDb/models/blogSchema")



async function createItem(item) {
    const result =  await blog.create({
        title:item.title,
        blog:item.type,
        userId:item.userId

    });
    return result
}

async function getItems() {
    const data =  await blog.find({});
    return data;
}

async function getItemById(itemId) {
    return  await blog.findById(itemId);
}

async function updateItem(itemId, updatedItem) {
    const result = await blog.findByIdAndUpdate(
        itemId,
        { $set: updatedItem }
    );
    return result
}

async function deleteItem(itemId) {
    const result = await blog.findByIdAndDelete(itemId);
    return result;
}

module.exports = {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
};
