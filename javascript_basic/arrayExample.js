//in java
// public String [] stringArray = new String[4];
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

let cars = ["bmw", "hyundai", "volvo", "lexus", 5, 2, car];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (car of cars) {
  console.log(car);
}
