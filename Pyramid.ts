import './Vector3D'
class Pyramid {
    baseWidth: number; // Assuming the base is square
    baseLength: number; // Height of the base
    positionX: number; // Position on the X-axis
    positionZ: number; // Position on the Z-axis
    height: number; // Height from the base to the apex

    constructor(baseWidth: number, baseLength: number, positionX: number, positionZ: number, height: number) {
        this.baseWidth = baseWidth;
        this.baseLength = baseLength;
        this.positionX = positionX;
        this.positionZ = positionZ;
        this.height = height;
    }

    // Method to calculate the volume of the pyramid
    calculateVolume(): number {
        return (1 / 3) * this.baseWidth * this.baseLength * this.height;
    }

    // Method to calculate the surface area of the pyramid
    calculateSurfaceArea(): number {
        // Assuming the pyramid is a regular pyramid with slant heights equal to the height
        const slantHeight = Math.sqrt((2 * this.baseWidth) ** 2 + this.height ** 2);
        return (1 / 2) * this.baseWidth * this.baseLength + this.baseWidth * slantHeight;
    }

    // Method to describe the pyramid
    describe(): string {
        return `This pyramid has a base width of ${this.baseWidth} units, a base height of${this.baseLength} units,` +
            `and stands at a height of ${this.height} units from the X-Z platform.` +
            `Its position on the X-axis is ${this.positionX} and on the Z-axis is${this.positionZ}.`;
    }
}
// Example usage:
const pyramid = new Pyramid(1, 1, 0, 0, 1);
console.log(pyramid.describe());
console.log(`Volume of the pyramid: ${pyramid.calculateVolume()} cubic units`);
console.log(`Surface area of the pyramid: ${pyramid.calculateSurfaceArea()} square units`);