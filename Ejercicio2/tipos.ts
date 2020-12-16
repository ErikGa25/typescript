/* boolean */
let logico: boolean = false
let verdadero: boolean = true

/* number */
let entero: number = 44
let decimal:number = 45.233
let hexadecimal: number = 0xcbabaa
let binario: number = 0b010101
let largo: number = 1_567_345_122

/* string */
let cadenas: string = 'mensaje#183'

/* any */
let cualquiera: any
cualquiera = 'string'
cualquiera = false

/* null */
let nada: null = null

/* undefined */
let indefinido: undefined = undefined

/* void */
function mensaje(): void {
    console.log('Mensaje')
}

/* arrays */
let dias: string[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

/* tuples */
let db: [nombre: string, edad: number, activo: boolean] = ['Eduardo', 25, false]

/* objetos */
let persona: {
    nombre: string,
    edad: number,
    pais: string,
    fecha: Date,
    activo: boolean,
    trabajo: {
        empresa: string,
        sueldo: number
    }
} = {
    nombre: 'Marcos',
    edad: 34,
    pais: 'México',
    fecha: new Date(2020, 12, 10),
    activo: true,
    trabajo: {
        empresa: 'TypeScript',
        sueldo: 20.500
    }
}

let objeto: object = {}