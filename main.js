const form = document.getElementById('form-comparacao');
const campoA = document.getElementById('campoA');
const campoB = document.getElementById('campoB');
const mensagemErro = document.querySelector('.error-message');
const mensagemSucesso = document.querySelector('.success-message');

function validaCampos(numA, numB) {
    return numB > numA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
        
    const formEValido = validaCampos(parseFloat(campoA.value), parseFloat(campoB.value));

    if (!formEValido) {
        campoB.classList.add('error');
        mensagemErro.style.display = 'block';
        mensagemSucesso.style.display = 'none';
    } else {
        campoB.classList.remove('error');
        mensagemErro.style.display = 'none';

        mensagemSucesso.innerHTML = `Formulário válido! O número B (<b>${campoB.value}</b>) é maior que o número A (<b>${campoA.value}</b>).`;
        mensagemSucesso.style.display = 'block';
    }
});
