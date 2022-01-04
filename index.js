$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


const cantidadEntradas = document.getElementById('cantidadEntrada')


const botonCalcular = document.getElementById('botonCalcular')

const categoria = document.getElementById('inputState')


botonCalcular.addEventListener('click',resumen)





function resumen(){
  
  let descuento = 0;
   
  if (categoria.value == "estudiante"){
    descuento = 0.2;
    
  } else 
  if (categoria.value == "trainee"){
    descuento = 0.5;
    
  }else 
    if (categoria.value == "junior"){
    descuento = 0.85;
        
    }
  
  totalCompra.innerHTML= 'Total a Pagar: $'+ Math.round(cantidadEntradas.value*descuento*200);
  
}





