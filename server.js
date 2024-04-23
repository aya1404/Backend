// Importing dependencies
const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
const contactController = require('./controllers/contactController')
const cors = require('cors')

const app = express()
app.use(express.json())

app.use(cors())
//connect db
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Database connected"))
    .catch(err => console.error("Error connecting to database:", err));

//Routes
app.use('/contact', contactController)

//connect server
app.listen(process.env.PORT, () => console.log('Server has been started successfully'))