"use strict";
//1. readOnly 속성 - 읽기전용
function playerMaker2(name) {
    return {
        name,
    };
}
const sagong = playerMaker2("sagong");
sagong.age = 12;
// 읽기전용 객체를 수정하려고하면 오류 발생
// sagong.name = "nayeong";
const numbers = [1, 2, 3, 4];
// Push 불가능
// numbers.push(1);
const names = ["1", "2"];
//-----------------
//2. Tuple
//array 생성 특정길이 특정타입지정
//최소 3개 아이템, 이 순서를 알려줄 때 필요
// 항상 정해진 개수의 요소를 가져야하는 어레이를 지정할 수 있다. - api가 이런식의 데이터를 넘겨줄때
const player3 = ["나영", 12, true];
// const player3: readonly [string, number, boolean] = ["나영", 12, true];
// 숫자로 바꾸려면 오류 발생
// player3[0] = 1;
//-----------------
//3.그 외의 타입
let a2 = undefined;
let b2 = null;
//-----------------
// 4. any - 아무거나 가능한 타입 (최대한 사용하지 않기)
const a3 = [1, 2, 3, 4];
const b3 = true;
// 이 연산이 가능함
a3 + b3;
const a4 = [1, 2, 3, 4];
const b4 = true;
// 이 연산 불가능 - 알아서 타입확인해줌
// a4 + b4;
//-----------------
//ts에만 있음 타입체커와만 소통한다 어떤타입인지 모르는 타입을 받으면
//5. unknown
//변수를 받는데 타입을 미리 모른다면 unknown
let a5;
//이 조건이 없으면 오류
if (typeof a === "number") {
    let b = a + 1;
}
if (typeof a === "string") {
    let b = a.toUpperCase();
}
//6. void
// 아무것도 리턴하지않는 함수를 의미
//보통 따로 지정해줄 필요없음
function hello() {
    console.log("x");
}
const a6 = hello();
// 오류발생 - void타입이기떄문에
// a6.toUpperCase()
//7. never
//절대! 함수가 리턴하지않을때
//리턴하지않고 오류를 발생시키는 함수
function hello2() {
    // return 'x' - 이것만 있을 때 never라고 지정해주면 오류
    throw new Error("xxx"); //오류 발생하면 정상작용
}
// 타입이 두가지 일 수 있을 때 발생할 수 있음
// function hello3(name: string | number): never {
function hello3(name) {
    if (typeof name === "string") {
        name.toUpperCase();
    }
    else if (typeof name === "number") {
        name + 1;
    }
    else {
        //type - never 여기 있는 거는 실행되지않을 거라는 것
        name;
    }
}
