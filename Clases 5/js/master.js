/*Javascript Vanilla*/
/*window.onload = function(){
    //Capturar elementos
    let titulo = document.querySelector('.titulo');

    titulo.addEventListener('mouseover',function(){
        titulo.classList.add('text-light','bg-danger');
        titulo.innerHTML = "Gracias por visitar nuestra galeria";
    })

    titulo.addEventListener('mouseout',function(){
        titulo.classList.remove('text-light','bg-danger');
        titulo.classList.add('text-light','bg-info');
        titulo.innerHTML = "Galeria de Fotos";
    })



//Trabajamos Javascript - Pero usando Jquery
$(document).ready(function () {
    //$('.titulo').html('Gracias por visitar nuestra galeria - Usando Jquery');
    //$('.titulo').addClass('text-light bg-danger');
    $('#subtituloFooter').html('Todos los Derechos Reservados - MSc. Ángel Daniel Fuentes');
    $('#subtituloFooter').addClass('text-danger');
    //Eventos
    $('.titulo').mouseover(function () {
        $('.titulo').html('Gracias por visitar nuestra galeria - Usando Jquery');
        $('.titulo').addClass('text-light bg-danger');
    });

    //Eventos animaciones
    $('article').mouseover(function () {
        $('img').fadeIn("slow");
    })

   /* $('article').mouseout(function () {
        $('img').fadeOut("slow");
    });/*









