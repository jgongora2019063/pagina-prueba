const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');
const comps = document.querySelector('#componentes')

boton.addEventListener('click', () =>{
    console.log("me diste click")
    menu.classList.toggle('hidden')
    comps.classList.toggle('text-center')
})