import { Planet } from "./planet";

export class Rover {
    x: number;
    y: number;
    direction: string;
    p: Planet;

    constructor(x: number, y: number, direction: string, s: number, obs: [number, number] []) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.p = new Planet(s, obs);
        if (this.x > s || this.y > s) {
          throw Error("coordinates out of bounds");
        }
    }

    getDirection() {
      return this.direction;
    }

    getCoordinates() {
      return [this.x, this.y];
    }

    move(instructions: string) {
      let dirArr = ["N", "W", "S", "E"];
      let moveInstruct = instructions.split("");

      for (let i in moveInstruct) {
        switch (moveInstruct[i]) {
          case "L":
            console.log("before Left:", this.direction);
            let num1 = dirArr.indexOf(this.direction);
            this.direction = dirArr[(num1 + 1) % 4];
            console.log("after Left:", this.direction);
            break;
          case "R":
            console.log("before Right:", this.direction);
            let num2 = dirArr.indexOf(this.direction);
            this.direction = dirArr[((num2 - 1) + 4) % 4];
            console.log("after Right:", this.direction);
            break;
          case "F":
            console.log("before Forward:", this.direction, this.x, this.y);
            this.x += Number((this.direction === "E")) - Number((this.direction === "W"));
            this.y += Number((this.direction === "N")) - Number((this.direction === "S"));
            console.log("after Forward:", this.direction, this.x, this.y);
            break;
          case "B":
            console.log("BACKWARD");
            this.x += Number((this.direction === "E")) + Number((this.direction === "W"));
            this.y += Number((this.direction === "N")) + Number((this.direction === "S"));
            break;
        }
      }
    }
}
