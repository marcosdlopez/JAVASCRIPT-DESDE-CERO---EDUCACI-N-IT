// Array 
// let datos =['daniel',20'true,['Gloria','Luis']]; //

let miFamilia = ['Karen','Analia','Dario' , 'David']
//                  0       1       2          3

//console.log(miFamilia);
//agregar nuevos elementos al array

miFamilia[4] - 'Nico';
//metodos para trabajar con los array

// cada elemento nuevo ocupa una posicion
// metodos para agregar elementos al final del array

miFamilia.push('Denisse');

//metodo para agregar elementos al array - pero al principio
miFamilia.unshift('Alejandro');


//metodos para sacar EL ULTIMO elementos del array - pop ()

let ultimoElemento = miFamilia.pop();
console.log(ultimoElemento);

//miFamilia.push(ultimoElemento);
// agrego el elemento sacado del final ahora lo coloco al principio

miFamilia.unshift(ultimoElemento);

//metodo para sacar el primer elemento - shif

let primerElemento = miFamilia.shift();
console.log(primerElemento);
miFamilia.push(primerElemento);

document.write('<h2>' + miFamilia + '</h2>');

// Ciclos Iterativos o Ciclos repetitivos (for - for of - for in - forEach)
// tipo mercado libre, en las descripciones , se fuciona con la base de datos
// FOR i++ ==1 = i=i +1
console.log(miFamilia.length)
document.write('<ul>');
for(let i=0; i< miFamilia.length; i++) {
    document.write('<li>' + miFamilia[i] + '</li>')
}
document.write('</ul>')

// for of
// formas de declar las variables - var - let - const (constante)


const nombreCompleto = "Marcos Lopez"; //global
console.log(nombreCompleto);
//let nombreCompleto ="Karen Denise"
//console.log(nombreCompleto);

if(nombreCompleto == "Daniel Lopez"){
    const nombreCompleto = "David Lopez"; //local
    console.log(nombreCompleto);
}
console.log(nombreCompleto);

document.write('<ol>');
for (const i of miFamilia) {
    document.write('<li>' + i + '</li>');
    
}
document.write('</ol>');

//ciclo forEach
//arrow function -- 2015 nueva forma de escribir codigo javascript -ecma - 6

document.write('</ol>');
miFamilia.forEach(element => {    
    document.write('<li>' + element + '</li>');
});
document.write('</ol>');


//como puedo ordenarar un array alfabeticalmente - sort()

miFamilia.sort();


//ciclo for in (es el utilizado para recorrer objetos literales)
//como interpolar contenidos de variables - literal string

document.write('<ul>')
for (const i in miFamilia) {
    document.write(`<li>  ${miFamilia[i]} </li>`)
}
document.write('</ul>')

// manejo de eventos y formas de atrapar elementos de nuestro HTML (DOM)
// un element de html lo puedo captura por : tag - id - class


let miH1 = document.getElementById('miH1');
//console.log(miH1);
miH1.style.color = 'red';
// otra forma de capturar los elementos 
// let miH2 = document.querySelector('h2'); // por la etiqueta
// let miH2 = document.querySelector('#mih2'); por id

//let miH2 = document.querySelector('.destacado'); //por la clase

//let misH2 = document.querySelectorAll('h2');
 
//console.log(misH2)
//misH2.style.color = 'blue';
//misH2.style.backgroundColor = 'tomato';

// Manejo de eventos
let boton1 = document.getElementById('boton1')
let boton2 = document.getElementById('boton2')

boton1.addEventListener('click', function() { //callback 
 miH1.style.color = 'blue';
 miH1.style.fontFamily = 'verdana';
 miH1.style.fontsize = '25px';
 miH1.style.textAlign = 'center';
miH1.style.backgroundColor = 'tomato';

})

























































