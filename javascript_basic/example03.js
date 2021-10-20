function plus(p1, p2) {
  return p1 + p2;
}

const plus2 = (p1, p2) => {
  return p1 + p2;
};

const minus = (p1, p2) => {
  return p1 - p2;
};

const multi = (p1, p2) => {
  return p1 * p2;
};

const div = (p1, p2) => {
  return p1 / p2;
};

console.log(plus(2, 5));
console.log(plus2(2, 5));
console.log(multi(1, 2));
console.log(minus(1, 2));
console.log(div(1, 2));

//- * / 추가해서 es6 arrow function 방식으로 선언하기
