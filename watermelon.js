function solution(n) {
  let answer = "";
  for (let i = 1; i < n + 1; i++) {
    if (i % 2 !== 0) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}