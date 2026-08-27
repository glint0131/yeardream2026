const express = require('express');
const app = express();
const port = 8000;

//app.method(url,function)
//get 방식으로 /hello 라는 요청이 온다면.....
app.get('/hello',(req,res)=>{
    res.send('<h1>hello,World for GET!</h1>')
})

//post 방식으로 /hello 라는 요청이 온다면.....
app.post('/hello',(req,res)=>{
    res.send('hello,World for Post!') //문자열로 반환만 가능
})


//get,post,put,delete,patch등 어떠한 방식으로 오던지 /test이기만 하다면.....
app.all('/test',(req,res)=>{
    res.json({"msg":"모든 메서드 사용가능"}); //json형태로 반환가능
})

const router = require('./routers');
//  /route 라는 요청이 오면 router로 연결
app.use('/route',router);
//use를 사용해 쓰는 모듈을 미들웨어 라고 한다.
// 미들웨어, 라우터에 당도하기 전에 무언가를 해주는 모듈(인터셉터)

app.listen(port,()=>{console.log(`http://localhost:${port}`)})