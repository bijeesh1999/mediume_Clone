const express=require('express')

const Router=express.Router();

const {createItem,getItems,getItemById,updateItem,deleteItem ,getAllBlogs}=require('../controllers/blogController')


Router.route("/").get(getItems).post(createItem)
Router.route("/:id").get(getItemById).delete(deleteItem).put(updateItem)
// Router.route("/").get(getAllBlogs)


module.exports=Router