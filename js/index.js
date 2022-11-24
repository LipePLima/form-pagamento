const button = document.querySelector('#button');
const form  = document.querySelector('#form');

button.addEventListener('click', event => {
    event.preventDefault();


})

form['nome'].addEventListener("keyup", event => {
    event.preventDefault();

    const costumerName = document.querySelector("#nome");
    costumerName.textContent = form['nome'].value;

});

form['numero'].addEventListener('keyup', event => {
    event.preventDefault();

    const numCard = document.querySelector('#num-card');
    numCard.textContent = form['num'].value;
})

