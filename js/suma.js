
 var resultado=0;
function sumar(){
    /*alert("entro a la funcion sumar");*/
    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;


/*    alert("precio"+precio);*/

    /*alert("en numero 1 se ingreso el valor "+numero1);
    alert("en numero 2 se ingreso el valor "+numero2);*/
    resultado = parseInt(numero1) + parseInt(numero2);
    alert("el resultado es "+resultado);
}

//alert("el resultado fuera de la funcion es "+resultado);

/*var nombre="Pedro";
alert("convertir a mayuscula "+nombre.toUpperCase());
alert("convertir a minuscula "+nombre.toLowerCase);
alert("posicion 2 "+nombre.charAt(2));
alert("encontrar posicion letra "+nombre.indexOf('d'));*/

//var parrafo1=document.getElementsByTagName("p");
//alert("parrafo "+parrafo1[2].innerHTML);
//parrafo1[2].innerHTML="se cambio el parrafo";


function realizar_operaciones_matematicas(){


    var numero1 = document.getElementById("numero1").value;
    var numero2 = document.getElementById("numero2").value;
    var datos_completos= true;

    if(numero1==''){
        document.getElementById("numero1").setAttribute("class", "form-control is-invalid");
        var parrafo1 = document.getElementById("parrafo_validar_numero1");
        parrafo1.innerHTML="Debe ingresar numero 1";
        parrafo1.setAttribute("class", "text-danger");            


    }else{
        document.getElementById("numero1").setAttribute("class", "form-control is-valid");
        var parrafo1 = document.getElementById("parrafo_validar_numero1");
        parrafo1.innerHTML="";

    }

    if(numero2==''){
        document.getElementById("numero2").setAttribute("class", "form-control is-invalid");
        var parrafo2 = document.getElementById("parrafo_validar_numero2");
        parrafo2.innerHTML="Debe ingresar numero 2";
        parrafo2.setAttribute("class", "text-danger");            

    }else{
        document.getElementById("numero2").setAttribute("class", "form-control is-valid");
        var parrafo2 = document.getElementById("parrafo_validar_numero2");
        parrafo2.innerHTML="";

    }
    if((numero1!='')&&(numero2!='')){

        /*var boton_sumar = document.getElementById(btnSumar);
        boton_sumar.setAttribute("class", "btn btn-info");*/

        document.getElementById("btnSumar").setAttribute("class", "btn btn-info boton-formulario"); 
        document.getElementById("btnSumar").setAttribute("disabled", ""); 
        document.getElementById("btnCancelar").setAttribute("class", "btn btn-info boton-formulario"); 


        numero1 =parseInt(numero1);
        numero2 =parseInt(numero2);
        multiplicar(numero1, numero2);
        restar(numero1, numero2);
        sumar(numero1, numero2);
    }
    

}

function multiplicar(numero1, numero2){
    var multiplicar_valor=numero1*numero2;

    var caja_multiplicar = document.getElementById("div_multiplicar");
    caja_multiplicar.innerHTML="La multiplicacion es "+multiplicar_valor;
}

function restar(numero1, numero2){
    var restar_valor=numero1-numero2;

    var caja_restar = document.getElementById("div_restar");
    caja_restar.innerHTML="La resta es "+restar_valor;
}

function sumar(numero1, numero2){
    var sumar_valor=numero1+numero2;

    var caja_sumar = document.getElementById("div_sumar");
    caja_sumar.innerHTML="La suma es "+sumar_valor;
}

/*codigo para una etiqueta h1 dentro de un div del html*/
var elemento_crear = document.createElement("h1");
var texto_h1 = document.createTextNode("texto para el h1");
elemento_crear.setAttribute("class", "text-success caja_materias");
elemento_crear.appendChild(texto_h1);

var buscar_caja_h1= document.getElementById("caja-crear-etiquetas");

buscar_caja_h1.appendChild(elemento_crear);


