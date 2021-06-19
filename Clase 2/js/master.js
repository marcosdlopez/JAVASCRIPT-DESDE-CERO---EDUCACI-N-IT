/*...condiciones...*/
/* nos permite lograr un condiciones.nunca se va a ir por un lado */
/* datos atraves de prompt son script , para datos numericos son parseInt lo convierto en dato tipo entero,y se almacena en la variable edad*/
/* para sueldo se usa parseFloat para decimal*/

/* atentos con el scope 

let nombre;
let edad;
let dia;
let contador;
do {

let nombre = prompt("Indique su nombre");
let edad = parseInt(prompt('Indique su edad'));
let dia = parseInt(prompt('Indique un numero del 1 al 7'));
let contador = parseInt(prompt('Indique un numero entre 1 y 100'));

} while (confirm('Deseas ver los datos?' ==true));
           (confirm('deseas salir' =false))
*/
let nombre = prompt("Indique su nombre");
let edad = parseInt(prompt('Indique su edad'));
let dia = parseInt(prompt('Indique un numero del 1 al 7'));
let contador = parseInt(prompt('Indique un numero entre 1 y 100'));

/*condicion*/
/*si la edad es mayor de 18 */
/*&& edad tiene que ser mayor a 18*/

if(edad >=18 && edad <=30){
    document.write("<h2>"+'Bienvenido a nuestra pagina '+ nombre +"</h2>");
    } else{
        document.write("<h2>"+'no tiene edad sufiente para ingresar a esta pagina..'+"</h2>");
    }

    /*otro recurso que nos brinda el lenguaje se llama switch es una estructura de control,nos permite hacer 
    una evaluacion multiple */
/*el segundo elemento arma la escrutrura de una vez*/
/* esto es lo mismo pero usando IF*/
/*
if (dia ==1) {
    document.write ("<h2>"+'Veo que juegas los dias lunes '+"</h2>");
} else if (dia ==2) {
    document.write ("<h2>"+'Veo que juegas los dias martes'+"</h2>");

} else if(dia ==3){
    ("<h2>"+'Veo que juegas los dias martes'+"</h2>");
}else { 
    document.write ("<h2>"+'Veo que juegas los dias martes'+"</h2>");

}*/


    switch (dia) {
        case 1:
            document.write ("<h2>"+'Veo que juegas los dias lunes '+"</h2>");
            break;
                 
        case 2:
            document.write ("<h2>"+'Veo que juegas los dias martes'+"</h2>");
                    break;
                     
                        case 3:
                            document.write ("<h2>"+'Veo que juegas los dias miercoles '+"</h2>");
                            break;
                            
                                case 4:
                                    document.write ("<h2>"+'Veo que juegas los dias jueves' +"</h2>");
                                    break;
                                    
                                        case 5:
                                            document.write ("<h2>"+'Veo que juegas los dias viernes'+"</h2>");
                                            break;

                                            case 6:
                                                document.write ("<h2>"+'Veo que juegas los dias sabado '+"</h2>");
                                                break;
                                                case 7:
                                                    document.write ("<h2>"+'Veo que juegas los dias domingo '+"</h2>");
                                                    break;
        default:
            document.write ("<h2>"+'Debe seleccionar un numero del 1 al 7'+"</h2>");

            break;
    }


/*Los Ciclos - nos permite iteracion repeticiones (while - do while - for - foreach - for of - for in*/
    /*
    let contar = 1;
while (contar <= contador) {
    document.write('<h2>'+'Estoy Contando '+contar+'</h2>'); 
  /*  contar = contar + 1; es lo mismo que contar++*/
 /*para ver en la consola*/
/*console.log(contar);*/
/*  contar+=3;
contar++;
} */



/* Ciclo do while simplemente entra y pregunta despues tambien la segunda opcion asi arma la estructura*/
/* para una captura de datos*/
let contar = contador;
do {
    document.write('<h2>'+'Estoy Contando '+contar+'</h2>'); 
    contar++;
} while (contar < contador);













