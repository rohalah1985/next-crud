const mongoose = require("mongoose")
const schema= mongoose.Schema

const newSchema= new schema({
    comment:String,
})

const list=mongoose.model('list', newSchema);

module.exports=list