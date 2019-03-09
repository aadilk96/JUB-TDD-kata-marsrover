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
        switch (i) {
          case "L":
            let num1 = dirArr.indexOf(this.direction);
            this.direction = dirArr[(num + 1) % 4];
            break;
          case "R":
            let num2 = dirArr.indexOf(this.direction);
            this.direction = dirArr[(num - 1) % 4];
            break;
          case "F":
            this.x += Number((this.direction === "E")) - Number((this.direction === "W"));
            this.y += Number((this.direction === "N")) - Number((this.direction === "S"));
            break;
          case "B":
            this.x += Number((this.direction === "E")) + Number((this.direction === "W"));
            this.y += Number((this.direction === "N")) + Number((this.direction === "S"));
            break;
        }
      }
    }
}
