var canvas = document.getElementById("fondo");
var lapiz = canvas.getContext("2d");
var btnIntentar = document.getElementById("btn-intentar");
var letra = document.getElementById("txt-intentos");
var palabraAdivinar = document.getElementById("lbl-palabra");
var palabraAuxiliar = "";

var palabra = "";
var numeroImagen = 1;
var intentos = 5;

var ahorcadoUno = {
  url: "./assets/img/1.png",
  imagen: Image,
};

var ahorcadoDos = {
  url: "./assets/img/2.png",
  imagen: Image,
};

var ahorcadoTres = {
  url: "./assets/img/3.png",
  imagen: Image,
};

var ahorcadoCuatro = {
  url: "./assets/img/4.png",
  imagen: Image,
};

var ahorcadoCinco = {
  url: "./assets/img/5.png",
  imagen: Image,
};

ahorcadoUno.imagen = new Image();
ahorcadoUno.imagen.src = ahorcadoUno.url;
ahorcadoUno.imagen.addEventListener("load", function () {});

ahorcadoDos.imagen = new Image();
ahorcadoDos.imagen.src = ahorcadoDos.url;
ahorcadoDos.imagen.addEventListener("load", function () {});

ahorcadoTres.imagen = new Image();
ahorcadoTres.imagen.src = ahorcadoTres.url;
ahorcadoTres.imagen.addEventListener("load", function () {});

ahorcadoCuatro.imagen = new Image();
ahorcadoCuatro.imagen.src = ahorcadoCuatro.url;
ahorcadoCuatro.imagen.addEventListener("load", function () {});

ahorcadoCinco.imagen = new Image();
ahorcadoCinco.imagen.src = ahorcadoCinco.url;
ahorcadoCinco.imagen.addEventListener("load", function () {});

btnIntentar.addEventListener("click", function () {
  var intento = letra.value;
  var respuesta = validar(intento);
  var transicion = '';
  
  for(i = 0; i < palabraAuxiliar.length; i++){
    if(palabraAuxiliar.substring(i,i+1) === '#'){
        if(palabraAuxiliar.substring(i,i+1) === respuesta.substring(i,i+1)){
          transicion = transicion + palabraAuxiliar.substring(i,i+1);
        }else{
          transicion = transicion + respuesta.substring(i,i+1);
        }
    }else if(palabraAuxiliar.substring(i,i+1) != '#'){
      transicion = transicion + palabraAuxiliar.substring(i,i+1);
    }else if(palabra.substring(i,i+1) != respuesta){
      alert('prueba')
    }
  }
  if(transicion === palabra){
    alert(`${palabra}  ${'Felicidades!!! has ganado.'}`)
    location.reload();
  }else{
    palabraAuxiliar = transicion;
    palabraAdivinar.innerHTML = palabraAuxiliar;
  }
});
  

function aleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

function obtenerPalabraAdivinar(numero) {
  var fruta = "";
  switch (numero) {
    case 1:
      fruta = "manzana";
      break;
    case 2:
      fruta = "pera";
      break;
    case 3:
      fruta = "mandarina";
      break;
    case 4:
      fruta = "papaya";
      break;
    case 5:
      fruta = "sandia";
      break;
  }
  return fruta;
}

function codificarPalabra(palabra) {
  var respuesta = "";
  for (i = 0; i < palabra.length; i++) {
    if (palabra.substring(i, i + 1) != "#") {
      respuesta = respuesta + "#";
    }
  }
  return respuesta;
}

function validar(letra) {
  var respuesta = "";
  for (i = 0; i < palabra.length; i++) {
    if (letra === palabra.substring(i, i + 1)) {
      respuesta = respuesta + letra;
    } else {
      respuesta = respuesta + "#";
    }
  }
  return respuesta;
}

function iniciar(){
    palabra = obtenerPalabraAdivinar(aleatorio(1,5));
    palabraAuxiliar = codificarPalabra(palabra);
    palabraAdivinar.innerHTML = palabraAuxiliar;
}

iniciar();

$(function () {
  $("#asterisco").click(function () {
    $("*").addClass("selector");
  });

  $("#numeral-correo").click(function () {
    $("#correo").addClass("selector");
  });

  $("#clase-campo").click(function () {
    $(".campo").addClass("selector");
  });

  $("#div").click(function () {
    $("div").addClass("selector");
  });

  $("#parrafo").click(function () {
    $("p").addClass("selector");
  });

  $("#input").click(function () {
    $("input").addClass("selector");
  });
});
