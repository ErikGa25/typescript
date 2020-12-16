// función tipada
function sumar(n1: number, n2: number): number {
    let suma = n1 + n2
    console.log(`Suma: ${n1} + ${n2} = ${suma}`)
    return suma
}

sumar(10, 13)

// funcion callback
let multiplicar: (a: number, b: number, callback: (r: number) => void) => void
multiplicar = (a, b, callback) => callback(a * b)

multiplicar(4, 5, function(result) {
    console.log(`Multiplicación: ${result}`)
})