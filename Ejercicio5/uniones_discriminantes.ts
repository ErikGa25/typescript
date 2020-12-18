type OperacionSuma = {
    s1: number,
    s2: number,
    tipo: 'suma'
}

type OperacionMultiplicar = {
    o1: number,
    o2: number,
    tipo: 'multiplicar'
}

type Operacion = OperacionSuma | OperacionMultiplicar

function operar(o: Operacion) {
    if(o.tipo == 'suma') {
        return o.s1 + o.s2;
    } else if(o.tipo == 'multiplicar') {
        return o.o1 * o.o2;
    }
}