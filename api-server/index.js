
const { connectDB } = require("./config/db")
const express = require('express')
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const cors = require('cors')

connectDB(); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors())
// app.options(process.env.FRONTEND_URL, cors);

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/login', authRoutes);


// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const PORT = process.env.BACKEND_PORT;
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ${process.env.BACKEND_URL}:${PORT}`);
});
