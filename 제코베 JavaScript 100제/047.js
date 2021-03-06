// set 자료형의 응용
// 아래 주어진 데이터로부터 중복을 제거하여 실제 접수 인원을 출력해주세요.

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

const peopleSet = new Set();
for (let person in people) {
  peopleSet.add(people[person]);
}

console.log(peopleSet.size);
