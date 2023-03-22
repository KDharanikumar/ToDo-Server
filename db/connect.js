const mongoose = require ('mongoose');
 db = async() =>{
    try{
        await mongoose.connect("mongodb+srv://dharanikumark:welcome123@todolist.ah0xowd.mongodb.net/?retryWrites=true&w=majority");
        console.log("Db connection Established")
    } catch(error){
        console.log('DB Error: ',error);
    }
}

module.exports = db;