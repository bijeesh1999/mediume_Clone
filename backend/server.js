const express= require('express')
const cors=require('cors')
const mongoDb = require('./mongoDb/dbConnection')


const app=express();
app.use(cors());
app.use(express.json());



app.use("/",require('./routers/blogRouter'));






app.listen(2000,async ()=>{
    await mongoDb();
    console.log(`http://localhost:2000`);
})