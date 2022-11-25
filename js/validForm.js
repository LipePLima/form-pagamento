function validForm (form) {
    if (form['nome'].value == '') {
        const div   = document.querySelector('#div__name');
        const input = document.querySelector('#nome');
        const p     = document.createElement('p');

        div.appendChild(p)
        input.classList.add('info-erro')
        p.classList.add('p-erro')
        p.textContent = 'Preencha o Campo Nome'
    } else {
        const div   = document.querySelector('#div__name');
        const input = document.querySelector('#nome');

        input.classList.remove('info-erro')
        div.lastElementChild.remove()
    }

    if (form['numero'].value == '') {
        const div   = document.querySelector('#div__num');
        const input = document.querySelector('#numero');
        const p     = document.createElement('p');

        div.appendChild(p)
        input.classList.add('info-erro')
        p.classList.add('p-erro')
        p.textContent = 'Preencha o Campo Número do Cartão'
    } else {
        const div   = document.querySelector('#div__num');
        const input = document.querySelector('#numero');

        input.classList.remove('info-erro')
        div.lastElementChild.remove()
    }

    if (form['mes'].value == '' && form['ano'].value == '') {
        const div        = document.querySelector('#div__date');
        const inputMonth = document.querySelector('#mes');
        const inputYear  = document.querySelector('#ano');
        const p          = document.createElement('p');

        div.appendChild(p)
        inputMonth.classList.add('info-erro')
        inputYear.classList.add('info-erro')
        p.classList.add('p-erro')
        p.textContent = 'Preencha os Campos de Validade'
    } else {
        const div   = document.querySelector('#div__date');
        const inputMonth = document.querySelector('#mes');
        const inputYear  = document.querySelector('#ano');

        inputMonth.classList.remove('info-erro')
        inputYear.classList.remove('info-erro')
        div.lastElementChild.remove()
    }

}


