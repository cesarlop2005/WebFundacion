$(document).on("ready", inicio); 

function inicio(){
   $('#mision').on('click',home);
   $('#menuservicios').on('click',servicios);
    $('#menumodelo').on('click',modelo);
    $('#menugaleria').on('click',galeria);
   $('#menuempleo').on('click',empleo);
   $('#menucontacto').on('click',contacto);
   

 	 /* map = new GMaps({
    div: '#map',
    width: '63%',
    height: '100%',
    lat: 8.7604918,
    lng: -75.879917517,
    zoom: 16
  });
    map.addMarker({
  lat: 8.760486,
  lng: -75.877718,
  title: 'Fundacion La Mano de Dios',
  click: function(e) {
    alert('You clicked in this marker');
  }
});*/

   

};
function home(){
    $('#home').show('slow');
    $('#servicios').hide('slow');
    $('#empleo').hide('slow');
    $('#contacto').hide('slow');
     $('#matencion').hide('slow');
    $('#mgaleria').hide('slow');
}
function servicios(){
    $('#servicios').show('slow');
    $('#home').hide('slow');
    $('#empleo').hide('slow');
    $('#contacto').hide('slow');
     $('#matencion').hide('slow');
     $('#mgaleria').hide('slow');
}
function modelo(){
    $('#servicios').hide('slow');
     $('#matencion').show('slow');
    $('#home').hide('slow');
    $('#empleo').hide('slow');
    $('#contacto').hide('slow');
    $('#mgaleria').hide('slow');
}
function empleo(){
    $('#empleo').show('slow');
    $('#home').hide('slow');
    $('#servicios').hide('slow');
    $('#contacto').hide('slow');
     $('#matencion').hide('slow');
     $('#mgaleria').hide('slow');
}
function contacto(){
    $('#contacto').show('slow'); 
    $('#home').hide('slow');
    $('#empleo').hide('slow');
    $('#servicios').hide('slow');
     $('#matencion').hide('slow');
     $('#mgaleria').hide('slow');
}
function galeria(){
    $('#contacto').hide('slow'); 
    $('#home').hide('slow');
    $('#empleo').hide('slow');
    $('#servicios').hide('slow');
     $('#matencion').hide('slow');
     $('#mgaleria').show('slow');
}
