
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const input = document.getElementById("mensagem");
    const pFrase = document.createElement('p');

    if(input.value){
        pFrase.classList.add('pFrase');
        const mensagemEnviada = document.getElementById('mensagem-enviada');
        pFrase.innerHTML = `<p class="MSG1">${input.value}</p>`;
        mensagemEnviada.appendChild(pFrase);
        input.value.innerHTML = '';
    }else{  
        return;
    }
   
});