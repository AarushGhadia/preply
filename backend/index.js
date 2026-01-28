import express from "express";

// we get an instance of express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Backend is working! YAY!",
  });
});

const users = [];

const data = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" }
]

app.post("/sign-up", (req, res) => {
  try {
    const { username, name, password } = req.body;

    if (!username || !name || !password) {
      return res.status(400).json({
        success: false,
        message: "Username, name and password are required fields",
      });
    }

    users.push({
      username,
      name,
      password,
    });

    return res.status(201).json({
      success: true,
      message: "User signed up successfully!",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
});


app.post('/sign-in',(req,res)=>{
    try {
       const {username, password} = req.body
       if(!username || !password){
        return res
        .status(400)
        .json({
            success:false,
            message:"Please send username and password"
        })
       } 
       const user = user.find(
        (user)=> user.username === username && user.password === password
       )

        if(!user){
            return res
            .status(401)
            .json({
                success:false,
                message:"Invalid credentials"
            })
        }
        return res
        .status(200)
        .json({
            success:true,
            message:"User signed in successfully",
            data:user
        })

    } catch (error) {
        return res
        .status(500)
        .json({
            success:false,
            message:"Internal Server Error",
            error:error.message
        })
    }
})


app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
