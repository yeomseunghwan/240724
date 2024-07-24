/*
    객체
        - 배열은 요소에 접근할 때 인덱스를 사용하지만, 객체는 키(key)를 사용
        - 객체는 중괄호{...}로 생성하며, 다음과 같은 형태의 자료를 쉼표(,)로 연결해서 입력

        ex)
        const product = {
            제품명: "~~",
            유형: "~~",
            성분: "~~~",
            원산지: "~~~~~",
            // 키와 값 뒤에 쉼표(,)를 넣어 구분
        };

        - 식별자로 사용할 수 없는 단어를 키로 사용할 경우
            객체를 생성할 때 키(key)는 식별자와 문자열을 모두 사용 가능
            대부분의 개발자가 식별자를 키로 사용하지만, 식별자로 사용할 수 없는 단어를 키로 사용할 때는 문자열 사용
            식별자가 아닌 문자열을 키로 사용했을 때는 무조건 대괄호[...]를 사용해야 객체의 요소에 접근 가능

        속성과 메소드
            객체의 속성은 모든 형태의 자료값을 가질 수 있음
            속성과 메소드 구분하기
            메소드: 객체의 속성 중 함수 자료형인 속성
            eat 메소드
            ex)
            const pet = {
            name : '구름',
            eat : function (food){}
            }
            //메소드를 호출하기.
            person.eat()

        */

// 변수를 선언합니다.
// const pet = {
//   name: "구름",
//   eat: function (food) {
//     console.log(this.name + "은/는 " + food + "을/를 먹습니다. "); // this 키워드를 사용해 자신이 가진 속성에 접근할 수 있음!
//   },
// };

// 메소드를 호출합니다.
// pet.eat("라면");

// 변수를 선언합니다.
// const test = {
//   a: function () {
//     // -> 익명 함수로 선언
//     console.log(this);
//   },
//   b: () => {
//     // -> 화살표 함수로 선언
//     console.log(this);
//   },
// };

// // 메소드를 호출합니다.
// test.a();
// test.b();

// const f = new Number(273);
// // undefined
// typeof f;
// // object
// f.sample = 10;
// // 10
// f.sample;
// // 10
// f;
// // 10
// f + 0;
// // 273
// f.valueOf();
// // 273

// power() 메소드를 추가합니다.
// Number.prototype.power = function (n = 2) {
//   return this.valueOf() ** n;
// };

// Number 객체의 power() 메소드를 사용합니다.
// const a = 12;
// console.log("a.power():", a.power());
// console.log("a.power(3):", a.power(3));
// console.log("a.power(4):", a.power(4));

// // indexOf() 메소드로 자바스크립트에서 문자열 내부에 어떤 문자열이 있는지, 배열 내부에 어떤 자료가 있는지 확인
// const j = "안녕하세요";
// j.indexOf("안녕");
// // 0
// j.indexOf("하세");
// // 2
// j.jindexOf("없는 문자열");
// // -1

//프로토타입으로 문자열 메소드 추가하기!
// contain() 메소드를 추가합니다.
String.prototype.contain = function (data) {
  return this.indexOf(data) >= 0;
};

Array.prototype.contain = function (data) {
  return this.indexOf(data) >= 0;
};

// String 객체의 contain() 메소드를 사용합니다.
const a = "안녕하세요";
console.log("안녕 in 안녕하세요:", a.contain("안녕"));
console.log("없는데 in 안녕하세요:", a.contain("없는데"));

// Array 객체의 contain() 메소드를 사용합니다.
const b = [273, 32, 103, 57, 52];
console.log("273 in [273,32,103,57,52]:", b.contain(273));
console.log("0 in [273,32,103,57,52]:", b.contain(0));

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// String 객체
// 문자열을 특정 기호로 자르기 : split()
// - split() 메소드는 문자열을 매개변수(다른 문자열)로 잘라서 배열을 만들어 리턴하는 메소드
// input = input.trim()

// json 객체
// - 자바스크립트 객체를 json 문자열로 변환할 때는 JSON.stringify() 메소드를 사용
// - JSON.stringify
// 자료를 생성합니다.
// const data = [
//   {
//     name: "혼자 공부하는 자바스크립트",
//     price: 18000,
//     publisher: "한빛미디어",
//   },
//   {
//     name: "HTML5 웹 프로그래밍 입문",
//     price: 26000,
//     publisher: "한빛 아카데미",
//   },
// ];

// // 자료를 JSON으로 변환합니다.
// console.log(JSON.stringify(data));
// console.log(JSON.stringify(data, null, 2));

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// JSON 객체
// - JSON 문자열을 자바스크립트 객체로 전개할 때는 JSON.parse() 메소드를 사용
// 자료를 생성합니다.
const data = [
  {
    name: "혼자 공부하는 자바스크립트",
    price: 18000,
    publisher: "한빛미디어",
  },
  {
    name: "HTML5 웹 프로그래밍 입문",
    price: 26000,
    publisher: "한빛 아카데미",
  },
];
// 자료를 JSON으로 변환합니다.
const json = JSON.stringify(data);
console.log(json);
// JSON 문자열을 다시 자바스크립트 객체로 변환합니다.
console.log(JSON.parse(json));

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// Math 객체
// - 수학과 관련된 기본적인 연산을 할 때는 Math 객체 사용
/*  . Math 객체 속성으로는 pi,e 와 같은 수학 상수가 있음
    . 메소드로는 Math.sin(), Math.cos(), Math.tan()와 같은 삼각함수도 있음
    . 랜덤한 숫자를 생성할 때 사용되는 Math.random() 메소드는 0이상 1 미만의 랜덤한 숫자를 생성
*/

const num = Math.random();

console.log("# 랜덤한 숫자");
console.log("0-1 사이의 랜덤한 숫자: ", num); // -> 0 <= 결과 < 1의 결과를 가짐
console.log("");

console.log("# 랜덤한 숫자 범위 확대");
console.log("0~10 사이의 랜덤한 숫자: ", num * 10); // -> 0 <= 결과 < 10의 범위를 가짐
console.log("0~50 사이의 랜덤한 숫자: ", num * 50);
console.log("");

console.log("#랜덤한 숫자범위 이동");
console.log("-5~5 사이의 랜덤한 숫자: ", num * 10 - 5); // -5 <= 결과 < 5의 범위를 가짐
console.log("-25~25 사이의 랜덤한 숫자: ", num * 50 - 25);
console.log("");

console.log("# 랜덤한 정수 숫자");
console.log("-5~5 사이의 랜덤한 숫자: ", Math.floor(num * 10 - 5));
console.log("-25~25 사이의 랜덤한 숫자: ", Math.floor(num * 50 - 25));

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// 객체 기반의 다중 할당
// 최신 자바스크립트에서는 객체 내부에 있는 속성을 꺼내서 변수로 할당할 때 다음과 같이 사용 가능
// ex)
// {속성 이름,속성 이름} = 객체
// {식별자 = 속성이름, 식별자 = 속성 이름} = 객체

// 객체를 생성합니다
// const object = {
//   name: "혼자 공부하는 자바스크립트",
//   price: 19000,
//   publisher: "한빛 미디어",
// };

// // 객체에서 변수를 추출합니다.
// const { name, price } = object; // name 속성과 price 속성을 그대로 꺼냄
// console.log("#속성 이름 그대로 꺼내서 출력하기");
// console.log(name, price);
// console.log("");

// const { a = name, b = price } = object; // name 속성을 a, price 속성을 b라는 이름으로 꺼냄
// console.log("# 다른 이름으로 속성 꺼내서 출력하기");
// console.log(a, b);

// 복사한 뒤에 자료를 추가하는 코드도 많이 사용되므로 전개 연산자로 배열을 전개하고 뒤에 자료를
// 추가하는 패턴도 사용
// ex) [...배열,자료,자료,자료]

// 사야하는 물건 목록
const 물건_200301 = ["우유", "식빵"];
const 물건_200302 = ["고구마", ...물건_200301, "토마토"]; // 해당 위치에 복사되어 전개. 위치를 원하는곳에 요소들의 순서를 바꿀 수 있음.

// 출력
console.log(물건_200301);
console.log(물건_200302);

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");

// 전개 연산자를 사용해 객체 요소를 추가할 수 있음
// ex) {...객체,자료,자료,자료}

const 구름 = {
  이름: `구름`,
  나이: 6,
  종족: "강아지",
};
const 별 = {
  ...구름,
  이름: "별", // 기존의 속성 덮어 쓰기
  나이: 1, // 기존의 속성 덮어 쓰기
  예방접종: true,
};

console.log(JSON.stringify(구름));
console.log(JSON.stringify(별));

console.log("ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ");
