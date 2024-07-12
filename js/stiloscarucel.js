// Selecciona el botón de siguiente
let nextBtn = document.querySelector('.next')
// Selecciona el botón de anterior
let prevBtn = document.querySelector('.prev')

// Selecciona el contenedor del slider
let slider = document.querySelector('.slider')
// Selecciona la lista de elementos dentro del slider
let sliderList = slider.querySelector('.slider .list')
// Selecciona el contenedor de miniaturas
let thumbnail = document.querySelector('.slider .thumbnail')
// Selecciona todos los elementos de miniaturas
let thumbnailItems = thumbnail.querySelectorAll('.item')

// Agrega el primer elemento de miniaturas al final del contenedor de miniaturas
thumbnail.appendChild(thumbnailItems[0])

// Función para el botón de siguiente
nextBtn.onclick = function() {
    moveSlider('next')
}

// Función para el botón de anterior
prevBtn.onclick = function() {
    moveSlider('prev')
}

// Función para mover el slider en la dirección especificada
function moveSlider(direction) {
    // Selecciona todos los elementos del slider
    let sliderItems = sliderList.querySelectorAll('.item')
    // Selecciona todos los elementos de miniaturas
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if (direction === 'next') {
        // Mueve el primer elemento del slider y de miniaturas al final
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        // Agrega la clase 'next' al slider para la animación
        slider.classList.add('next')
    } else {
        // Mueve el último elemento del slider y de miniaturas al inicio
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        // Agrega la clase 'prev' al slider para la animación
        slider.classList.add('prev')
    }

    // Añade un evento para eliminar la clase de animación después de que termine
    slider.addEventListener('animationend', function() {
        if (direction === 'next') {
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // Elimina el event listener después de que se active una vez
}

// Slider automático
let autoSlider = setInterval(function() {
    moveSlider('next')
}, 5000) // Cambia la imagen cada 1 segundo (1000 milisegundos)
