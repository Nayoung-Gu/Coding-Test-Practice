// 소수판별
// 소수이면 Yes, 아니면 No로 출력하세요.

const prime = 11;

function checkPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("NO");
      return false;
    }
  }
  if (n === 1) {
    console.log("NO");
    return false;
  }
  console.log("YES");
}

checkPrime(prime);
