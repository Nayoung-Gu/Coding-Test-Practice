// 3의 배수인가요?

const n = prompt("숫자를 입력하세요");

if(n % 3 == 0 && n != 0) {
    console.log("짝");
} else {
    console.log(n);
}