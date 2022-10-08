const Inputprecio = document.getElementById("price")
const Inputdiscount = document.getElementById("discount")
const botonCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("result")

botonCalcular.addEventListener("click", calcularDescuento)
function calcularDescuento(){
    // Formula de como calcular el porcentaje P de precio. D de decuento.
    //P * (100 - D )) / 100


  
    const price = Number(Inputprecio.value);
    const discount = Number(Inputdiscount.value);


    if (!price || !discount){ // Si no hay precio ni decuento 

        pResultado.innerText="Ingresa los valores correspondientes.";
        return;
    }

    if (discount > 100){
        pResultado.innerText="Ajá ya quisieras wey.";
        return;
    }




    const newPrice = (price * (100 - discount)) / 100;

    pResultado.innerText = "Su nuevo precio con descuento es " + newPrice;
}