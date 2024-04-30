const form = document.getElementById('form-numero');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');

//Faz a validação se o número B é maior que o A
function validaMaior(numA, numB) {
    let eMaior = true;
    if (numB > numA) {
        return eMaior;
    } else {
        return eMaior = false;
    }
}

form.addEventListener('submit', function (e) {
    //Se clicar no botão, não da refresh na página
    e.preventDefault();

    let mensagem;
    let containerMensagem;

    //Função em execução
    validacao = validaMaior(campoA.value, campoB.value);

    if (validacao) {
        containerMensagem = document.querySelector('.submit-message');
        mensagem = 'Parabéns! O preenchimento estava correto!';
        containerMensagem.innerHTML = mensagem;
        containerMensagem.style.display = 'block';
        containerMensagem.style.backgroundColor = 'green';
        
        campoA.value = '';
        campoB.value = '';

    } else {
        containerMensagem = document.querySelector('.submit-message');
        mensagem = 'Incorreto! O número B deve ser maior que o número A';
        containerMensagem.innerHTML = mensagem;
        containerMensagem.style.display = 'block';
        containerMensagem.style.backgroundColor = 'red';
    }
})