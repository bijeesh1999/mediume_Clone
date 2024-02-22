const mongoose=require("mongoose")



const blogSchema=mongoose.Schema({
    title:String,
    blog:[],
    userId:String

},{
    timestamps:true
})


module.exports=mongoose.model('blog',blogSchema)