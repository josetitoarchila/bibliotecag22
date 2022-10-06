/*var a=5, nombre="Pedro";
alert(nombre+ " tiene la nota "+a);+*/

/*var numero1 =prompt("ingrese numero 1");
var numero2 =prompt("ingrese numero 2");*/
/*var numero1 =8;
var numero2 =5;
var resultado= parseInt(numero1)+parseInt(numero2);*/
/*alert("el resultado de la suma es "+resultado);*/
/* voy a adicionarle a la pagina web el resultado en una etiqueta h1*/

/*document.write("<h5 style='text-align: center'>El resultado de la suma es "+resultado+"</h5>");
document.write("</br></br>");

document.write("<h5 class='alinear'>El resultado de la suma es "+resultado+"</h5>");*/

var resultado2="1";
var numero4 = parseInt(resultado2);
document.write("<h5 class='alinear'>El resultado dos de la suma es "+numero4+"</h5>");
document.write("</br></br>");


var materias = ["quimica", "fisica", 8, true, "matematicas"];

materias[materias.length]="español";

materias.push("EF", "Idiomas");

/*materias.pop();*/

document.write("<div class='caja_materias'>")
document.write("<p>"+materias[0]+"</p>");
document.write("<p>"+materias[1]+"</p>");
document.write("<p>"+materias[2]+"</p><br />");
document.write("<p>"+materias[3]+"</p><br />");
document.write("<p>"+materias[4]+"</p><br />");
document.write("<p>"+materias[5]+"</p><br />");
document.write("<p>"+materias[6]+"</p><br />");
document.write("<p>"+materias[7]+"</p><br />");
document.write("</div>");
document.write("<p class='text-center'>"+materias.join(' ')+"</p>");
document.write("<p class='text-center'>"+materias.sort()+"</p>");


document.write("<p class='fs-6 alinear'>.fs-1 text</p>");

var edad =prompt("ingrese edad");
//edad = parseInt(edad);
if(edad<18){
    alert("es menor de edad");

}else if(edad===18){
    alert("debe sacar cedula");
}else if(edad>70){
    alert("es tercera de edad");
}
else{
    alert("es mayor de edad");
}
var i;
/*ejercicio for*/ 
for(i=1; i<=10;i++){
    document.write("<p class='fs-5 text-center'> la i va en "+i+"</p>");
}

/*while*/
var j=3;
while(j<=9){
    document.write("<p class='fs-5 text-center'> la j va en "+j+"</p>");
    //j=j+1;
    j++;
}
//do--while
var k=9;
do{ 
    k++;
    document.write("<p class='fs-5 text-center'> la k va en "+k+"</p>");

}while(k<=12);








var numero3=5;