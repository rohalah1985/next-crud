const express=require("express")
const mongoose=require("mongoose")
const list=require('./model/list')
const cors = require("cors");

const app=express();
app.use(cors());


app.use(express.json())

mongoose.connect("mongodb://localhost:27017/comment")
.then((res)=> console.log("db connected"))
.catch((err)=>console.log(err))

app.listen(5000, ()=> console.log('listening on port 3000'))


app.get('/', (req,res)=>{
    res.send("hello world")
})

app.post('/add',(req,res)=>{
    const addList=new list({
        comment : req.body.comment,
    })
    addList.save()
    .then((result)=> res.send (result))
    .catch((err)=> console.log(err))

})

app.get('/list', (req,res)=>{
    list.find()
    .then((result)=> res.send(result))
    .catch((err)=> console.log(err))
})

app.delete('/del/:id',(req,res)=> {
    list.findByIdAndDelete(req.params.id)
    .then((result)=> res.send(result))
    .catch((err)=>console.log(err))
})

app.put('/edit/:id' , (req,res)=> {
    
    list.findByIdAndUpdate(req.params.id, {comment : req.body.comment})
    .then((result)=> res.send(result))
    .catch((err)=> console.log(err))
})