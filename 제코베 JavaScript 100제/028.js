// 2-gram
// 2-gram: 문자열에서 2개의 연속된 요소를 출력하는 방법

const word = "안녕하세요";

for(let i = 0; i<word.length-1; i++) {
    console.log(word[i], word[i+1]);
}