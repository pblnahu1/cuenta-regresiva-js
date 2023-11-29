const tiempo = document.getElementById("limite");
const mostrarTexto = document.getElementById("txt-res");
let btn = document.getElementById("btn-empezar");

let intervalo = null; // para iniciar y terminar el intervalo
let contador = 10;

btn.addEventListener("click", function () {
    intervalo = setInterval(() => {
        tiempo.innerText = contador;
        contador--;

        if (contador < 0) {
            clearInterval(intervalo);
            mostrarTexto.innerHTML = `
            <h1 class="title-timeout">Se acabó el tiempo!</h1>
        `
        }
    }, 1000);
});

function coloresAleatorios() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function cambiarColorTexto() {
    const txt = document.getElementById("txt-res");
    txt.style.color = coloresAleatorios();
}

setInterval(cambiarColorTexto, 1000);





