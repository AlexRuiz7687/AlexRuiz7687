let nombre = `Tana`
let edad = 43

let actual = new Date().getFullYear()

function calcularNacimiento(){
    return actual - edad
}

//OBJETO DEL DOM QUE CREA UNA SELECCION EN EL HTML PARA INYECTARLE INFORMACIÓN
document.querySelector("body").innerHTML="HOLA"

document.querySelector("body").innerHTML=`
<div>
    <p>Mi nombre es ${nombre}</p>
    <p> Mi edad es ${edad}</p>
    <p> Nací en el año ${calcularNacimiento()}</p>
</div
`

//INSERTAR EL ARCHIVO JAVASCRIPT EN EL DOCUMENTO HTML (INDEX.HTML) DENTRO DEL BODY (SE ACONSEJA COLOCARLO AL FINAL) DE LA SIGUIENTE FORMA:
//<script src="js/03-comillas_dinamicas.js"></script>


