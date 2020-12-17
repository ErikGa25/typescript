var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, alto) {
        this._nombre = "";
        this.ancho = ancho;
        this.alto = alto;
    }
    Object.defineProperty(Rectangulo.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        set: function (value) {
            this._nombre = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangulo.prototype, "area", {
        get: function () {
            return this.ancho * this.alto;
        },
        enumerable: true,
        configurable: true
    });
    Rectangulo.prototype.perimetro = function () {
        return this.ancho * 2 + this.alto * 2;
    };
    return Rectangulo;
}());
var c1 = new Rectangulo(20, 10);
var c2 = new Rectangulo(14, 3);
console.log(c1.area);
console.log(c2.perimetro());
c1.nombre = 'E';
console.log(c1.nombre);
