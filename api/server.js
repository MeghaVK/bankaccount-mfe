const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes= require('./routes/auth.routes');
const dashboardRoutes = require('./routes/dashborad.routes');
const transactionsRoutes = require('./routes/transactions.routes');
const profileRoutes = require('./routes/profile.routes');






// app.use(
//   cors({
//     origin: [
//       'http://localhost:4200',
//       'http://localhost:4201',
//       'http://localhost:4202',
//       'http://localhost:4203',
//       'https://bankaccount-mfe.onrender.com'
//     ],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     allowedHeaders: ['Content-Type', 'Authorization']
//   })
// );



app.use(cors({
  origin: function (origin, callback) {
    // Allow requests without an Origin header, such as local health checks.
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked origin: ${origin}`));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.use(express.json());
app.get('/api/health',(req,res)=>{
    res.json({
        success:true,
        message:'API is working fine'
    })

});
app.use('/api/dashboard',dashboardRoutes);
app.use('/api/transactions', transactionsRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
})