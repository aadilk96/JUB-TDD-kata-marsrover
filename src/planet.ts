export class Planet {
    size: number;
    obstacles: [number, number] [];


    constructor(size: number, obstacles: [number, number] []) {
        this.size = size;
        this.obstacles = obstacles;
    }
    getSize() {
      return this.size;
    }
    getObstacles() {
      return this.obstacles;
    }
}
