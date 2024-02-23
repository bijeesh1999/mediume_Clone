const mongoose=require("mongoose")



const blogSchema=mongoose.Schema({
    title:String,
    blog:[],
    userId:String,
    approved:Boolean
},{
    timestamps:true
})


module.exports=mongoose.model('blog',blogSchema)