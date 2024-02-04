interface Circle {
    radius: number;
    diameter: number;
    area: number;
    circumference: number;
}
interface Cylinder {
    base: Circle;
    height: number;
    volume: number;
    surfaceArea: number;
}
let cylinder: Cylinder = {
    base: {
        radius: 5,
        diameter: 10,
        area: Math.PI * Math.pow(5, 2),
        circumference: 2 * Math.PI * 5
    },
    height: 10,
    volume: Math.PI * Math.pow(5, 2) * 10,
    surfaceArea: Math.PI * Math.pow(5, 2) * 2
        + 2 * Math.PI * 5 * 10
};
console.log(cylinder)