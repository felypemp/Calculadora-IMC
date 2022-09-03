//capturar evento de sumit do formulário
const form = document.querySelector('.formulario');

form.addEventListener('submit',function(e) {
    e.preventDefault();
    console.log('Enviado')
    setResultado('Olá mundo')
});


function criaP(className){
    const p = document.createElement('p');
    return p;
}

function setResultado(msg){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();
}