// class Car {
//   constructor(speed, color) {
//     this.speed = speed
//     this.color = color
//   }

//   createMyCar() {
//     console.log(
//       'your car with color :' +
//         this.color +
//         ' and your car speed is :' +
//         this.speed,
//     )
//   }
// }

// var odi = new Car(300, 'red')

// odi.createMyCar()

class Sum {
  constructor(a, b) {
    this.a = a
    this.b = b
  }

  addsum() {
    console.log(this.a + this.b)
  }
}

const add = new Sum(3, 5)
console.log(add.a)
