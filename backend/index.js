import express from 'express';

// we get an instance of express
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = 3000;

// Anytime we use app."anything" it always takes two arguments
// 1. The variable
// 2. A callback function

app.get('/',(req,res)=>{
    return res
    .status(200)
    .json({
        success:true,
        message:"This is my first API",
    })
})




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
