//OPERADOR DE ASIGNACIÓN

let edad = 43

let elemento = document.querySelector("body")

//OPERADOR DE ASIGNACIÓN += -= += /=

let numero = 10
numero *=10
//dibujarCapa(numero)

function dibujarCapa(valor){
    elemento.innerHTML +=`<div>${valor}</div>`
}

//OPERADORES ARITMÉTICOS + - * / %

numero ++
//dibujarCapa(numero)
numero --

numero = 20

let resultado = ++numero

dibujarCapa(numero)

//OPERADORES DE COMPARACIÓN == <= >= < > ===
let valor1 = 5
let valor2 = '5'

resultado = valor1 == valor2
dibujarCapa(resultado)

//OPERADORES DE NEGACIÓN
//false | 0 | "" | null | undefined | NaN

resultado = false;

dibujarCapa(!NaN)


//OPERADORES TERNARIOS
let encontrado = true;
(encontrado)
? dibujarCapa("ENCONTRADO!!!") //si se cumple (true)
: dibujarCapa("Sigue Buscando...") //si no se cumple (false)


let vivo = true
let existo

(vivo)

? existo = true
: existo = false

dibujarCapa(existo)

existo = (vivo)
? "SI"
: "NO"
dibujarCapa(existo)

vivo = true
edad = 43;

(vivo && edad >= 40)
?dibujarCapa('ERES UN PURETA')
:dibujarCapa('Todavia escapas')


