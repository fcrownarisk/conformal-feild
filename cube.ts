class Cube {
    private sideLength: number;
    constructor(sideLength: number) {
        this.sideLength = sideLength;
    }
    getVolume(): number {
        return Math.pow(this.sideLength, 3);
    }
}
// 创建一个边长为5的正方体
let cube = new Cube(5);
console.log(`The volume of the cube is ${cube.getVolume()} cubic units.`);
