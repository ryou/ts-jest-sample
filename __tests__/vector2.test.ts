import { Vector2 } from '../src';

describe('Vector2', () => {
    test('Add Vector2', () => {
        const vec1 = new Vector2(1, 2);
        const vec2 = new Vector2(3, 4);

        const result = new Vector2(4, 6);

        expect(vec1.add(vec2)).toEqual(result);
    });

    test('Sub Vector2', () => {
        const vec1 = new Vector2(1, 2);
        const vec2 = new Vector2(3, 4);

        const result = new Vector2(-2, -2);

        expect(vec1.sub(vec2)).toEqual(result);
    });

    test('Mul Vector2', () => {
        const vec1 = new Vector2(1, 2);
        const scalar = 2;

        const result = new Vector2(2, 4);

        expect(vec1.mulByScalar(scalar)).toEqual(result);
    });

    test('Magnitude Vector2', () => {
        const vec1 = new Vector2(2, 2);
        const root8 = 2.828427;
        expect(vec1.magnitude).toBeCloseTo(root8, 6);
    });

    test('Normalize Vector2', () => {
        const vec1 = new Vector2(0, 5);
        const result = new Vector2(0, 1);
        expect(vec1.normalize()).toEqual(result);
    });
});
