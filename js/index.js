const button = document.querySelector('#button');
const form  = document.querySelector('#form');

button.addEventListener('click', event => {
    event.preventDefault();

    validForm(form)
})


