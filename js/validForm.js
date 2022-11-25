function validForm () {
    const inputName  = document.querySelector('#name');
    const inputNum   = document.querySelector('#num');
    const inputMonth = document.querySelector('#mes');
    const inputYear  = document.querySelector('#ano');
    const inputCvc   = document.querySelector('#cvc');

    const lista = [inputName, inputNum, inputMonth, inputYear, inputCvc];
    const erros = [];

    lista.forEach( (item) => {
        if (item.value === '') {
            const erro = item.parentNode.querySelector('small');
    
            item.classList.add('info-erro')
            erro.classList.add('erro')
            erro.textContent = `Preencha o Campo `
            erros.push(item)
        } else {
            const erro = item.parentNode.querySelector('small');
            item.classList.remove('info-erro');
            erro.classList.add('remove');
            erros.pop()
        }
    })

    if (erros.length === 0) {
        form.reset()
    }
}
