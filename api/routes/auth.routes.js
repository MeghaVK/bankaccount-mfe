const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "bank-demo-secret";

// const demoUser={
//     id:'CUST101',
//     name:'Megha Kulkarni',
//     email:'megha@test.com',
//     password:'Megha@123',
//     role:'customer'
// };

const users = [
  {
    id: 'CUST101',
    name: 'Megha Kulkarni',
    email: 'megha@test.com',
    password: 'Megha@123',
    role: 'customer'
  },
  {
    id: 'CUST102',
    name: 'Rahul Sharma',
    email: 'rahul@test.com',
    password: 'Rahul@123',
    role: 'customer'
  },
  {
    id: 'MGR101',
    name: 'Priya Deshmukh',
    email: 'priya@test.com',
    password: 'Priya@123',
    role: 'manager'
  },
  {
    id: 'ADM101',
    name: 'Bank Admin',
    email: 'admin@test.com',
    password: 'Admin@123',
    role: 'admin'
  }
];

router.post("/login",(req,res)=>{
    const {email,password}=req.body;
     const user = users.find(
        user=> user.email === email
    )
    

    if(!user || user.password !== password){
        return res.status(401).json({
            success:false,
            message:"Invalid email or password"
        })
    }

   

    const token = jwt.sign({
        id:user.id,
        email:user.email,
        role:user.role
    },
    JWT_SECRET,
    {
        expiresIn:'1h'
    });




    res.json({
        sucess:true,
        message:"Login successful",
        token,
        user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    }
    })


});
module.exports = router;

