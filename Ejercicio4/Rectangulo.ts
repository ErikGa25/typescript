class Rectangulo {
    // se puede usar # para modo privado
    //private ancho: number
    //private alto: number

    readonly ancho: number
    readonly alto: number
    private _nombre: string = ""

    constructor(ancho: number, alto: number) {
        this.ancho = ancho
        this.alto = alto
    }

    get nombre() {
        return this._nombre
    }

    set nombre(value: string) {
        this._nombre = value
    }

    get area() {
        return this.ancho * this.alto
    }

    perimetro() {
        return this.ancho * 2 + this.alto * 2
    }
}

let c1 = new Rectangulo(20, 10)
let c2 = new Rectangulo(14, 3)

console.log(c1.area)
console.log(c2.perimetro())

c1.nombre = 'E'
console.log(c1.nombre)