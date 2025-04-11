
const { connectDB } = require("./config/db")
const express = require('express')
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const cors = require('cors')

connectDB(); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const corsOptions = {
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use('/api/v1/login', authRoutes);
app.use('/api/v1', userRoutes);


// Basic route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const PORT = process.env.BACKEND_PORT;
app.listen(PORT, () => {
  console.log(`Server Running on PORT:${PORT}`);
});
