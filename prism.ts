class Prism {
    length: number;
    width: number;
    height: number;
    faces: number;
    constructor(length: number, width: number, height: number, faces: number) {
        this.length = length;
        this.width = width;
        this.height = height;
        this.faces = faces;
    }
}
let myPrisms = new Prism(5, 3, 10, 6);
console.log(myPrisms.length); // 输出棱的长度
console.log(myPrisms.width); // 输出棱的宽度
console.log(myPrisms.height); // 输出棱的高度
console.log(myPrisms.faces); // 输出棱的面数