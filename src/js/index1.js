const botao = document.querySelector('.botao');
const inputs = document.querySelectorAll('.input');
const paragrafo = document.querySelectorAll('.campo-obrigatorio')


function removerAtivos() {
    inputs.forEach((allInputs) => {

        allInputs.classList.remove('input-ativo-tudo-ok');
        allInputs.classList.remove('input-ativo-campo-obrigatorio');
        allInputs.nextElementSibling.classList.remove('campo-obrigatorio-ativo')
    })
    
}
removerAtivos();

botao.addEventListener('click', (event) => {
    adicionarAtivoCampoObrigatorio()
    function adicionarAtivoCampoObrigatorio() {
        inputs.forEach((allInputs) => {

            if (allInputs.value === '') {
                allInputs.classList.remove('input-ativo-tudo-ok')
                allInputs.classList.add('input-ativo-campo-obrigatorio');
                allInputs.nextElementSibling.classList.add('campo-obrigatorio-ativo');

            } else if (allInputs.value !== '') {
                allInputs.classList.add('input-ativo-tudo-ok')
                allInputs.classList.remove('input-ativo-campo-obrigatorio');
                allInputs.nextElementSibling.classList.remove('campo-obrigatorio-ativo')
            }
                event.preventDefault();
        })
    }
})

