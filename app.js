import express from "express";
import { config } from "dotenv";


config({
    path: "./data/config.env",
  });
  



export const app = express ()



// Using Middleware 
app.use(express.json())



app.get('/', (req,res,next) => {
    res.send('working')
})


// import Routes here 
import user   from './routes/user.js'

app.use('/api/v1/user', user)