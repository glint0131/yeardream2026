const express = require('express'); //express 모듈 호출용어
const app = express(); //express를 객체화하여 app에 할당

//겟 방식으로 / 요청이 오면 ... 할일
//btn.addEventListener('click',()=>{});
app.get('/',(req,res)=>{
    res.send('Hello,World Express.js');

}); //서버에 있어서 필수적

// 서버는 8000번 포트로 실행
app.listen(8000,function(){
    console.log('server on : http://localhost:8000'); //서버가 켜졌을 때 띄울 문구
});

//node index.js