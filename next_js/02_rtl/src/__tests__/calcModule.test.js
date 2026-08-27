//test() : 특정한 테스트 단위
//expect(): 테스트 실행
// describe():test()의 group,describe는 describe를 담을 수 있다

import {divide, minus, multiply, plus} from "@/app/calcModule";
import {render, screen} from "@testing-library/react";
import App from "@/app/page";
import {userEvent} from "@testing-library/user-event/dist/cjs/setup/index.js";

async function calcTestUi(val1,val2,operVal,answer){
    const {container} = render(<App/>);

    const su1 = container.querySelector('input[name="su1"]');
    const su2 = container.querySelector('input[name="su2"]');
    const oper = container.querySelector('select[name="oper"]');
    const btn = container.querySelector('button');
    const result = screen.getByTestId('result');

    //2.원하는 요소 확보
    //3.특정 이벤트 발생시
    await userEvent.type(su1,val1);
    await userEvent.type(su2,val2);
    await userEvent.selectOptions(oper,operVal);
    await userEvent.click(btn);
    //4. 특정한 결과 확인
    expect(result).toHaveTextContent(answer);
}


describe('사칙연산 UI 테스트',function(){

    test('더하기 테스트',async function (){
    await calcTestUi('10','20','+','답 : 30');
    });

    test('빼기 테스트',async function (){
        await calcTestUi('20','10','-','답 : 10');
    });

    test('곱하기 테스트',async function (){
        await calcTestUi('1','20','*','답 : 20');
    });

    test('나누기 테스트',async function (){
        await calcTestUi('10','2','/','답 : 5');
    });

    test('빼기 에러 테스트',async function (){
        await calcTestUi('2','10','-','답 : 0');
    });

    test('나누기 에러 테스트',async function (){
        await calcTestUi('10','0','/', '답 : 0');
    });


});


/*
toBe(): 숫자,문자,불리언 타입의 값에 일치
toEqual() : 객체나 배열의 일치
toContain() : 배열이나 문자열 내에 특정 값 포함 여부
toMatch() : 정규표현식 문자열이 정규패턴에 부합하는지
toThrow() : 특정 에러가 발생하는지 여부
* */