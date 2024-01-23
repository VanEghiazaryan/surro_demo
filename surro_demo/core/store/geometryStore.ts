export abstract class Geometry {
    symbol = '*';
    constructor(public name: string, public final?:number) {
        this.final = final;
    }
    abstract calculateSueface(): number
}

export class Triangle extends Geometry {
    
    constructor(public name: string, private width: number, private heigth: number) {
        super(name)
    }
    calculateSueface(): number {
        this.final = 0.5 * this.width * this.heigth
        return this.final
    }
}

export class Square extends Geometry {
    constructor(public name: string, private width: number) {
        super(name)
    }
    calculateSueface(): number {
        this.final = this.width * this.width;
        return this.final
    }
}

export class Rectangle extends Geometry {
    constructor(public name: string, private width: number, private heigth: number) {
        super(name)
    }
    calculateSueface(): number {
        this.final = this.width * this.heigth
        return this.final
    }
}

export enum GeometryType {
    triangle = 'Triangle',
    square = 'Square',
    rectangel = 'Rectangle'
}