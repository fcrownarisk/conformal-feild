class Tetrahedron {
    private base: number;
    private height: number;

    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }

    public getVolume(): number {
        // 正四面体的体积计算公式为 V = (√2/12) * b * h
        return Math.sqrt(2) / 12 * this.base * this.height;
    }

    public getSurfaceArea(): number {
        // 正四面体的表面积计算公式为 A = (√2/2) * b * h
        return Math.sqrt(2) / 2 * this.base * this.height;
    }
}

// 使用示例
let tetrahedron = new Tetrahedron(5, 10);
console.log(tetrahedron.getVolume()); // 输出正四面体的体积
console.log(tetrahedron.getSurfaceArea()); // 输出正四面体的表面积