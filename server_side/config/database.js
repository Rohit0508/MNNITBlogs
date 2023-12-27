const mongoose = require('mongoose');
require("dotenv").config();

exports.connect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("DB connected successfully");
    })
    .catch((error)=>{
        console("error in connecting DB" + error);
        process.exit(1);
    })
}