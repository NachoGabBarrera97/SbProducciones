
_toggle.onclick = () =>{
    _items.classList.toggle("open")
    _toggle.classList.toggle("close")
}

let imagenes=[
    {
        "url":"assets/images/funcion1.jpg"
    },
    {
        "url":"assets/images/funcion2.jpg"
    },
    {
        "url":"assets/images/funcion3.jpg"
    },
    {
        "url":"assets/images/funcion4.jpg"
    }

]

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let actual = 0;




function mostrarImagen() {
    imagen.innerHTML = `<img src="${imagenes[actual].url}" alt="" class="img" loading="lazy">`;
}

function goToSlide(i) {
    actual = i;
    const translateXValue = `-${actual * 100}%`;
    carouselInner.style.transform = `translateX(${translateXValue})`;
  }


function cambiarImagenSiguiente() {
    actual = (actual + 1) % imagenes.length;
    mostrarImagen();
    
}

function cambiarImagenAnterior() {
    actual = (actual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
}

atras.addEventListener('click', cambiarImagenAnterior);
adelante.addEventListener('click', cambiarImagenSiguiente);

// Automatizar el cambio de imágenes cada 3 segundos (3000 milisegundos)
setInterval(cambiarImagenSiguiente, 3000);