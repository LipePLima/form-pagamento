const button = document.querySelector('#button');

button.addEventListener('click', function (event) {
    event.preventDefault();


    modifyCard()
})

function cardData () {
    const form  = document.querySelector('#form');

    const data = {
        nome: form.nome.value,
        num: form.numero.value,
        month: form.mes.value,
        year: form.ano.value,
        cvc: form.cvc.value
    }

    return data
}

function modifyCard () {
    const costumer = cardData();

    const cvc  = document.querySelector('#cvc-card');
    const num  = document.querySelector('#num-card');
    const name = document.querySelector('#name-card');
    const date = document.querySelector('#data-card');
    
    costumer.nome.addEventListener('input', function addNum () {
        if (costumer.nome = '') {
            name.innerHTML = 'Nome Completo'
        } else {
            name.innerHTML = costumer.nome
        }
    })
}
