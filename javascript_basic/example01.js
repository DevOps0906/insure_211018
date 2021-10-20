//in java
//public String name;
//private int age
var name = "홍길동";
var age = 99;
var object = {
  name: "홍길동",
  age: 99,
};
var global = "global";

const method = () => {
  let a = "A";
  const b = "B";
  a = "A-";
  var global = "global in method";
  console.log(global);
  //   console.log(a, b);
};

method();
console.log(global);
