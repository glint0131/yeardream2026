const mongo = require('mongoose');

function connectDB(){
mongo.set('debug',true) //실행되는 쿼리를 로그에 출력(개발용)실제 릴리즈땐 비활성화 시켜줘야함
    const url = 'mongodb://localhost:27017/yeardream';
mongo.connect(url);
const db = mongo.connection;
db.on('error',()=>console.log('DB 접속 실패'));
db.on('open',()=>console.log('DB접속 완료'));

}

module.exports = connectDB;