let car = {
  name: "g80",
  ph: 500,
  start: function () {
    console.log("엔진 시작");
  },
  stop: function () {
    console.log("엔진 정지");
  },
};

console.log(car.name);
car.start();
