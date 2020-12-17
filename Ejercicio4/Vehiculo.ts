abstract class Vehiculo {
    protected fabricante: string

    constructor(fabricante: string) {
        this.fabricante = fabricante
    }

    moverse() {
        console.log(`El vehiculo de ${this.fabricante} se movio`)
    }
}

class VehiculoTerrestre extends Vehiculo {
    private tipo: string

    constructor(fabricante: string, tipo: string) {
        super(fabricante)
        this.tipo = tipo
    }

    moverse() {
        console.log(`El vehiculo terrestre se movio`)
    }

    reparar() {
        console.log(`Manual de ${this.fabricante}`)
    }
}

class VehiculoAereo extends Vehiculo {
    moverse() {
        super.moverse()
        console.log(`El vehiculo aereo se movio`)
    }
}

class VehiculoMaritimo extends Vehiculo {
    moverse() {
        console.log(`El vehiculo maritimo se movio`)
    }
}

let vh: VehiculoAereo = new VehiculoAereo("air")
vh.moverse()

let vh2: Vehiculo = new VehiculoTerrestre("Yamaha", 'Moto')
vh2.moverse()