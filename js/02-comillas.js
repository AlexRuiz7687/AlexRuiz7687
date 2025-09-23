//VARIABLES
let nombre1 = "Tana"
let nombre2 ='Tana'
let nombre3 = `Tana`
let edad = 43
let actual = new Date().getFullYear()

let resultado1 = "Mi nombre es " + nombre1
let resultado2 = 'Mi nombre es ' + nombre2
let resultado3 = `Mi nombre es  ${nombre3} ` 


resultado1 = "Mi nombre es " + nombre1 + " y tengo " + edad
console.log(resultado1);

resultado3 = `Mi nombre es  ${nombre3}  y tengo  ${edad}`
console.log(resultado3);

function calcularNacimiento(){
    return actual - edad
}

resultado3 = `Mi nombre es  ${nombre3}  y tengo  ${edad} y nací en ${calcularNacimiento()}`

console.log(resultado3);