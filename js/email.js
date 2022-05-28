const form = document.querySelector('.contact-form');
const contactButton = document.querySelector('#contact-button');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const message = encodeURIComponent(`${formData.get('name')} ha solicitado información para el servicio de inversión: ${formData.get('service')}. \n\nEl teléfono de contacto es ${formData.get('phone')}.`);
    form.setAttribute('action', `mailto:platinuminversionescr@gmail.com?subject=Solicitud de información para ${formData.get('name')}&body=${message}`);

    const inputs = form.querySelectorAll('#name, #email, #phone, #service');

    inputs.forEach(element => {
        element.value = '';
    });

    form.submit();

});
