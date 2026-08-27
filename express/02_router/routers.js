const express = require('express');
const router = express.Router(); //app의 router기능만 실행

// 기능별로 페이지를 나눌 때 유용하다
// example : /board <- 게시판과 관련된 기능
// example : /member <- 회원과 관련된 기능

router.get('/hello',(req,res)=>{
    console.log('Router Module, Get')
    res.send('Router Module, 겟')
})

router.post('/hello',(req,res)=>{
    console.log('Router Module, Post')

})

module.exports = router;