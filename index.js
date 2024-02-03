const express =require("express")
const path=require("path")
const app=express()
const {dbConnect}=require("./db/dbConnect")
const {userModel}=require("./db/model/userModel")

//middleware
app.use(express.json())


//to make static
app.use(express.static(path.join(__dirname,"public")))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
})
app.post("/newuser", async (req,res)=>{
    // console.log(req.body)
    let user= new userModel(req.body)
    let response= await user.save()
    console.log(response)
    res.status(201).send({msg:" User Register Successfully "})

})

app.listen(4000,"127.0.0.4",()=>{
    dbConnect()
    console.log(`server started at http://127.0.0.4:4000`);
})