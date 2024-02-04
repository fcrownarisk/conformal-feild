class Vector3D {
    x: number;
    y: number;
    z: number;
  
    constructor(x?: number, y?: number, z?: number) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
    }
    add(other: Vector3D): Vector3D {
      return new Vector3D(this.x + other.x, this.y + other.y, this.z + other.z);
    }
  }
const vectorA = new Vector3D(1, 2, 3);
const vectorB = new Vector3D(4, 5, 6 );
const vectorC= new Vector3D(7, 8, 9);
// Use the add method on vectorA with vectorB
const result = vectorA.add(vectorB).add(vectorC);
// Print the result
console.log(result.x); // Output: 5
console.log(result.y); // Output: 7
console.log(result.z); // Output: 9