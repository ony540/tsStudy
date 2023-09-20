"use strict";
//1. 원시타입 변수
let a = "hello";
let b = false;
// 숫자가 들어갈 array
let c = [];
//문자열 넣으면 오류 발생
// c.push("1");
//2. 참조타입
// const player = {
//     name: "nico",
// };
// 없기때문에 오류 발생
// player.hello();
//해당 타입을 담은 배열 생성 - 항상이렇게 해줄 필요X
let aA = [1, 2];
let bA = ["il", "s"];
let cA = [true];
const playerNico = {
    name: "nico",
};
if (playerNico.age && playerNico.age < 10) {
}
const playerNay = {
    name: "Nay",
};
//4.함수
function playerMaker(name) {
    //이것이 리턴하는 것을 Player 타입이라고 지정
    return {
        name,
    };
}
const pNico = playerMaker("nico");
pNico.age = 12; //Player 타입이므로 age를 가질 수 있음
