import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';
import jwt from "jsonwebtoken"

const app = express();

// app.use((req,res,next)=>{
//     return jwt.sign({ foo: 'bar' }, 'secret',{
//         algorithm: 'HS256',
//         expiresIn: '1440m',
//       }, function(err, token) {
//         console.log(token);
//         // res.status(200).json(token)
//         next();
//       });
// })

app.use('/students',studentRoutes);

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://shourya2001:1TebUGlFaGkXNlaV@cluster0.tavai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8000;

app.get("/getToken", (req,res)=>{
    return jwt.sign({ foo: 'bar' }, 'secret',{
        algorithm: 'HS256',
        expiresIn: '1440m',
      }, function(err, token) {
        console.log(token);
        res.status(200).json(token)
      });
})

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>app.listen(PORT,()=> console.log(`Connection to mongoDB is established and is now listening on port : ${PORT}`)
)).catch((err)=> console.log(err.message));

// mongoose.set('useFindAndModify',false)

