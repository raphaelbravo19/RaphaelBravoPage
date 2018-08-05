$(document).ready(function () {
  var boton=$("#boton")
  boton.click(function (e) { 
    e.preventDefault();
    boton.toggleClass("animado");
    //$().css(propertyName, value);
  });
});