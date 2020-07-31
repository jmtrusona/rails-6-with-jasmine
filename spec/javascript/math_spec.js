import { double, square, cube } from "../../app/javascript/packs/math";

describe('#double', () => {
    it('should return double the value', () => {
        expect(double(3)).toBe(6)
    })
})

describe('#square', () => {
    it('should return the square of the value', () => {
        expect(square(4)).toBe(16)
    })
})

describe('#cube', () => {
    it('should return the cube of the value', () => {
        expect(cube(2)).toBe(8)
    })
})