const express= require('express')
const app = express()
const port =3000

function func(){
    console.log("Serever to lestining to port 3000")
}

var students =[]

app.get('/1',(req,res)=>{
    res.send("hello world1")
})

app.get('/2',(req,res)=>{
    res.send("hello world2")
})
app.get('/',(req,res)=>{
    res.send("hello world2")
})

app.post('/addstudent',(req,res)=>{
    const students = req.query.studentname
    console.log(student)
    students.push(student)
    res.sendStatus(200)
})

app.listen(port,()=>{
    console.log(`listening at ${port}`)
})