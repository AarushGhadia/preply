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
        message:"Backend is working! YAY!",
    })
})

app.get('/add/:num1/:num2',(req,res)=>{

    console.log(req.params);
    console.log(req.params.num1);
    console.log(req.params.num2);
    
    const num1 = Number(req.params.num1);
    const num2 = Number(req.params.num2);
    const sum = num1 + num2;
    return res
    .status(200)
    .json({
        success:true,
        message:`The sum of ${num1} and ${num2} is ${sum}`,
    })
})


app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})
