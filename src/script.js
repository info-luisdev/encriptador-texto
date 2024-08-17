textoEncriptar = [];

function encriptar() {

    let elemento = seleccionarElemento("#entrada");
    console.log(elemento.value);
    if (elemento.value == '') {
        alert("Error: Ingrese un texto para Encriptar")

    }
    else {
        
    }
    
}

function seleccionarElemento(elemento) {
    
    let elementoSelecionado = document.querySelector(elemento);

    return elementoSelecionado;
}