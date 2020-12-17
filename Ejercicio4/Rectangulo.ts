class Rectangulo {
    // se puede usar # para modo privado
    //private ancho: number
    //private alto: number

    readonly ancho: number
    readonly alto: number

    constructor(ancho: number, alto: number) {
        this.ancho = ancho
        this.alto = alto
    }

    area() {
        return this.ancho * this.alto
    }

    perimetro() {
        return this.ancho * 2 + this.alto * 2
    }
}

let c1 = new Rectangulo(20, 10)
let c2 = new Rectangulo(14, 3)

console.log(c1.area())
console.log(c2.perimetro())