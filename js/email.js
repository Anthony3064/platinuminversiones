const form = document.querySelector('.contact-form');
const contactButton = document.querySelector('#contact-button');

form.addEventListener('submit', (event) => {

    event.preventDefault();

    const formData = new FormData(form);
    form.setAttribute('action', 'https://anthony3064.github.io/platinuminversiones/stmt/sendEmail/send-email.php');

    const inputs = form.querySelectorAll('#name, #email, #phone, #service');
    const messageDiv = document.querySelector('.message');
    const menuLinkContact = document.querySelector(`.nav-menu a[href="#contact"]`);

    if ((inputs[0].value === null || inputs[0].value === undefined || inputs[0].value === '')
        || (inputs[1].value === null || inputs[1].value === undefined || inputs[1].value === '')
        || (inputs[2].value === null || inputs[2].value === undefined || inputs[2].value === '')
        || (inputs[2].value === null || inputs[3].value === undefined) || inputs[3].value === '') {

        messageDiv.innerHTML = 'Debe llenar todos los campos solicitados <button class="button-close"><i class="fas fa-times close" ></i></button>';
        messageDiv.style.display = 'flex';
        messageDiv.classList.remove('green');
        menuLinkContact.click();
        const buttonClose = document.querySelector('.button-close');
        buttonClose.addEventListener('click', () => {
            messageDiv.style.display = 'none';
        });
    } else {

        if (!validateEmailFormat(inputs[1].value)) {
            messageDiv.innerHTML = 'Formato de correo electrónico es inválido <button class="button-close"><i class="fas fa-times close" ></i></button>';
            messageDiv.style.display = 'flex';
            messageDiv.classList.remove('green');
            menuLinkContact.click();
            const buttonClose = document.querySelector('.button-close');
            buttonClose.addEventListener('click', () => {
                messageDiv.style.display = 'none';
            });
        } else {
            messageDiv.innerHTML = 'Correcto <button class="button-close"><i class="fas fa-times close" ></i></button>';
            messageDiv.style.display = 'flex';
            messageDiv.classList.add('green');
            menuLinkContact.click();
            const buttonClose = document.querySelector('.button-close');
            buttonClose.addEventListener('click', () => {
                messageDiv.style.display = 'none';
            });
            form.submit();
        }

    }

    inputs.forEach(element => {
        element.value = '';
    });

});


const validateEmailFormat = (email) => {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    } else {
        return false;
    }
}

const hideElement = (element) => {
    element.style.display = 'none';
}
