// función tipada
function sumar(n1, n2) {
    var suma = n1 + n2;
    console.log("Suma: " + n1 + " + " + n2 + " = " + suma);
    return suma;
}
sumar(10, 13);
// funcion callback
var multiplicar;
multiplicar = function (a, b, callback) { return callback(a * b); };
multiplicar(4, 5, function (result) {
    console.log("Multiplicaci\u00F3n: " + result);
});
