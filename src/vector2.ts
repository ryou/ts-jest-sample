export class Vector2 {
    constructor(protected _x: number, protected _y: number) {
    }

    get x(): number {
        return this._x;
    }

    get y(): number {
        return this._y;
    }

    get magnitude(): number {
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
    }

    add(other: Vector2): Vector2 {
        return new Vector2(this.x + other.x, this.y + other.y);
    }

    sub(other: Vector2): Vector2 {
        return new Vector2(this.x - other.x, this.y - other.y);
    }

    mulByScalar(scalar: number): Vector2 {
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    normalize(): Vector2 {
        return this.mulByScalar(1 / this.magnitude);
    }
}