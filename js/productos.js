//VARIABLES
let descuentoUsuario = 25;


const formulario = document.getElementById("buscarProducto");


//ARRAY DE OBJETOS
let productos = [

    {id:123,nombre:'Pantalón',precio:25, imagen: 'pantalon.jpg'},
    {id:124,nombre:'Camisa',precio:8, imagen: 'camisa.jpg'},
    {id:469,nombre:'Gorra',precio:18, imagen: 'gorra.jpg'},
    {id:126,nombre:'Reloj',precio:37, imagen: 'reloj.avif'},

]

//FUNCIONES

//SELECCIONAR PRODUCTO
function seleccionProductoId(productoSeleccionado){
    
    let producto=null

    for(let i=0; i<productos.length; i++){
        if(productoSeleccionado==productos[i].id){   
            producto = productos[i]
        }
    }

    if(producto==null){
        document.querySelector("div").innerHTML=`
        <div>
        <p>Este producto no existe</p>
        </div>`
        console.log("Este producto no existe")
    }
    else{
        document.querySelector("div").innerHTML=`
            <div>
                <img src=img/${producto.imagen}>
                <p> Nombre del Producto: ${producto.nombre}</p>
                <p>Precio: ${producto.precio}€</p>
                <p>Precio con descuento: ${descuento(producto,descuentoUsuario)}€</p>
                <p>Descuento Aplicado: ${descuentoUsuario}%</p>
            </div>
            `
        //console.log(producto)
    }
}

//APLICAR DESCUENTO
function descuento ( producto, descuentoUsuario){
    totalDescuento = producto.precio-(producto.precio*(descuentoUsuario/100))
    return totalDescuento
}

//seleccionProductoId(productoSeleccionado)


//EVENTO

formulario.addEventListener("submit",function(e){
    e.preventDefault();
    let productoSeleccionado = Number(document.getElementById("idProducto").value);
    seleccionProductoId(productoSeleccionado);
});