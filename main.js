const form = document.getElementById('form-valores');
let numeroInferior = document.getElementById('numero-menor');
let numeroSuperior = document.getElementById('numero-maior');
let formEValido = false;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const mensagemSucesso = `Formulário preenchido corretamente, obrigado!`
    const mensagemErro = `O Valor A deverá ser menor que o Valor B`
    
    formEValido = (numeroSuperior.value)
    if (numeroSuperior.value > numeroInferior.value) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        numeroSuperior.value = '';
        numeroInferior.value = '';
    } else if (numeroInferior.value >= numeroSuperior.value) {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        numeroInferior.style.border = '1px solid red';
        numeroSuperior.value = '';
        numeroInferior.value = ''; 
    }
    })

    numeroSuperior.addEventListener('keyup', function(e) {
        console.log(e.target.value);
        formEValido = (e.target.value);
        
        if (formEValido) {
            document.querySelector('.success-message').style.display = 'none';
            document.querySelector('.error-message').style.display = 'none';
        } else  {
            document.querySelector('.success-message').style.display = 'none';
            document.querySelector('.error-message').style.display = 'none';
        }
    })