function validForm () {
    const mes = form['mes'];
    const ano  = form['ano'];

    const lista = [nome, numero, mes, ano, cvc];
    const erros = [];

    lista.forEach( (item) => {
        if (item.value === '') {
            const erro = item.parentNode.querySelector('small');
            const campo = item.parentNode.querySelector('label').textContent;

            console.log(campo)

            item.classList.add('info-erro')
            erro.classList.add('erro')
            erro.textContent = `Preencha o Campo ${campo}`
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
