const mongoose = require('mongoose')


const mongoDb = async() => {
    const isConnected =await mongoose.connect('mongodb+srv://bijeeshbstackup:bijeesh1999@cluster0.8roueeq.mongodb.net/')
    if(isConnected){
        console.log("connected Sucess");
    }else{
        console.log('error');
    }
}

module.exports= mongoDb

