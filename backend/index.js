const express = require("express")
const notes =require("./data/notes")
const dotenv =require("dotenv");
const connectToMongo = require("./config/db")
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes")
const { notFound, errorHandler } = require("./middlewares/errorMIddleWares");

const app = express();
dotenv.config()
connectToMongo()
app.use(express.json())


// app.get("/",(req,res)=>{
//     res.send("api is running...")
// }) 

// app.get("/api/notes",(req,res)=>{
//     res.json(notes)
// })
// app.get(`/api/notes/:id`,(req,res)=>{
//     const note =notes.find((n)=>n._id===req.params._id);
//     res.send(note)
// })

app.use('/api/users',userRoutes)
app.use('/api/notes',noteRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;

app.listen(PORT,console.log(`server is running on port ${PORT}`));
