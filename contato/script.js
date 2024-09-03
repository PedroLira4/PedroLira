// script.js
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    
    const formElements = document.querySelectorAll('input, textarea');
    formElements.forEach(element => {
        element.value = '';
        element.style.borderColor = '#28a745';  // cor verde para sucesso
    });

    const button = document.querySelector('button');
    button.innerText = 'Enviado!';
    button.style.backgroundColor = '#28a745';
    button.style.transform = 'scale(1.1)';

    setTimeout(() => {
        button.innerText = 'Enviar Mensagem';
        button.style.backgroundColor = '#007BFF';
        button.style.transform = 'scale(1)';
        formElements.forEach(element => {
            element.style.borderColor = '#007BFF';  // retornar à cor original
        });
    }, 2000);
});
