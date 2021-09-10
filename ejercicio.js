
/*var cantidades = prompt('Ingresa 3 cantidades');

var cantidades =[monto1,monto2,monto3];
console.log(cantidades[0]);
console.log(cantidades[1]);
console.log(cantidades[2]);
cantidades.reverse();
document.write(cantidades[0]); */

var monto1 = prompt("ingresar cantidad:") 
var monto2 = prompt("ingresar cantidad:")
var monto3 = prompt("ingresar cantidad:")
console.log(monto1, monto2, monto3);

var cantidades = [monto1, monto2, monto3]
cantidades.sort(function(a,b){return a-b});
cantidades.reverse();
// console.log(monto1, monto2, monto3);
document.write("la cantidad mayor es: ", cantidades[0])
