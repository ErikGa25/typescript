type Coordenada = [x: number, y: number]
type Vector = [x: number, y: number]

type Posicion = {
    posicion: Coordenada
}

type Movible = {
    velocidad: Vector,
    aceleracion: Vector
}

type interseccion = Posicion & Movible

let obj: interseccion = {
    posicion: [10, 23],
    velocidad: [8, 9],
    aceleracion: [1, 1]
}