var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehiculo = /** @class */ (function () {
    function Vehiculo(fabricante) {
        this.fabricante = fabricante;
    }
    Vehiculo.prototype.moverse = function () {
        console.log("El vehiculo de " + this.fabricante + " se movio");
    };
    return Vehiculo;
}());
var VehiculoTerrestre = /** @class */ (function (_super) {
    __extends(VehiculoTerrestre, _super);
    function VehiculoTerrestre(fabricante, tipo) {
        var _this = _super.call(this, fabricante) || this;
        _this.tipo = tipo;
        return _this;
    }
    VehiculoTerrestre.prototype.moverse = function () {
        console.log("El vehiculo terrestre se movio");
    };
    VehiculoTerrestre.prototype.reparar = function () {
        console.log("Manual de " + this.fabricante);
    };
    return VehiculoTerrestre;
}(Vehiculo));
var VehiculoAereo = /** @class */ (function (_super) {
    __extends(VehiculoAereo, _super);
    function VehiculoAereo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehiculoAereo.prototype.moverse = function () {
        _super.prototype.moverse.call(this);
        console.log("El vehiculo aereo se movio");
    };
    return VehiculoAereo;
}(Vehiculo));
var VehiculoMaritimo = /** @class */ (function (_super) {
    __extends(VehiculoMaritimo, _super);
    function VehiculoMaritimo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VehiculoMaritimo.prototype.moverse = function () {
        console.log("El vehiculo maritimo se movio");
    };
    return VehiculoMaritimo;
}(Vehiculo));
var vh = new VehiculoAereo("air");
vh.moverse();
var vh2 = new VehiculoTerrestre("Yamaha", 'Moto');
vh2.moverse();
