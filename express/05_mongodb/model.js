//mongoose는 스키마 설정이 가능하다(테이블 형태)
const mongoose = require('mongoose');

//맨앞이 대문자면 클래스? 라고 함
let schema = new mongoose.Schema({
    id:{type:String,
    required : [true,'아이디는 필수 입니다.'],
    unique:true,
        trim:true,
        minlength:[4,'아이디는 4글자 이상입니다.'],
        maxlength:[25,'아이디는 최대 25글자입니다']
    },
    pw:{type:String,
    trim:true,
    required:[true,'비밀번호는 필수입니다'],
    select:false, //조회할 때 기본적으로 빼고 가져온다.
    },
    name:{type:String,
        trim:true,
        required:[true,'이름은 필수입니다']},
    phone:{type:String,
        trim:true},
    grade:{
        type:String,
        default:'user',
        enum:['user','admin']
}

},{
collection:'member', //적용한 컬렉션 (member)
timestamps:true, //발생한 시간 기록
//mongodb는 기본적으로 _id를 만든다.
//mongoose에서는 이 _id를 id로 기록하기 때문에 id를 임의로 지정할거면 false
id:false
});

schema.index({name:1});
//model명은 단수형 파스칼 표기법을 사용한다
module.exports = mongoose.model('Member',schema);