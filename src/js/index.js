const formulario = document.getElementById('formulario');
const input = document.getElementById('mensagem');
const mensagemEnviada = document.getElementById('mensagem-enviada');

function handleSubmit(event) {
    event.preventDefault();

    if (!input.value) {
        return;
    }

    const pFrase = document.createElement('p');
    pFrase.classList.add('pFrase');
    pFrase.innerHTML = `<p class="MSG1">${input.value}</p>`;
    mensagemEnviada.appendChild(pFrase);
    input.value = '';
}

formulario.addEventListener('submit', handleSubmit);
