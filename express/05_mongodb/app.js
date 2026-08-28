//npm install express mongoose cors

const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db');


//middleware
//Cross Domain Policy(JS를 이용한 서로 다른 도메인에서 하는 통신은 막는다)
//특정 IP에 대해서 허용해주는 기능
app.use(cors());
app.use(express.json());//body로 보내는 json형태로 받기
connectDB();
app.all('/',(req,res)=>{
    res.send('/member를 이용해 join, list, get, update, delete')
})
app.use('/member', require('./member_router'));


app.listen(80,()=>console.log('http://localhost'))