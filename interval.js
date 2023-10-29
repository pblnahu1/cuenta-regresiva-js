const tiempo = document.getElementById("limite");
const mostrarTexto = document.getElementById("txt-res");

let contador = 10;

const time = setInterval(() => {
    tiempo.innerText = contador;
    contador--;

    if (contador <= 0) {
        clearTimeout(time);
        mostrarTexto.innerHTML = `
            <h1 class="title-timeout">Se acabó el tiempo!</h1>
        `
    }
}, 1000);




