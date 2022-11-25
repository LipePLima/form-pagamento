const nome   = document.querySelector('#name');
const numero = document.querySelector('#num');
const mes    = document.querySelector('#mes');
const ano    = document.querySelector('#ano');
const cvc    = document.querySelector('#cvc');

nome.addEventListener('keyup', () => {
    const costumer = document.querySelector('#name-card');

    if (nome.value == '') {
        costumer.textContent = 'NOME COMPLETO'
    } else {
        costumer.textContent = nome.value;
    }
});

mes.addEventListener('keyup', () => {
    const month = document.querySelector('#mes-card');

    if (mes.value == '') {
        month.textContent = '00/'
    } else {
        month.textContent = `${mes.value}/`;
    }
})

ano.addEventListener('keyup', () => {
    const year = document.querySelector('#ano-card');

    if (ano.value == '') {
        year.textContent = '00'
    } else {
        year.textContent = ano.value;
    }
})

cvc.addEventListener('keyup', () => {
    const cvcCard = document.querySelector('#cvc-card');

    if (cvc.value == '') {
        cvcCard.textContent = 'cvc'
    } else {
        cvcCard.textContent = cvc.value;
    }
})

numero.addEventListener('keyup', event => {
    event.preventDefault();

    const numCard = document.querySelector('#num-card');

    if (numero.value == '') {
        numCard.textContent = '0000 0000 0000 0000'
    } else {
        numCard.textContent = numero.value;
    }
})

// Espaçamento do número
function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}

function mcc(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{4})(\d)/g,"$1 $2");
    v=v.replace(/^(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3");
    v=v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g,"$1 $2 $3 $4");
    return v;
}

function id( el ){
	return document.getElementById( el );
}

window.onload = function(){
	id('num').onkeypress = function(){
		mascara( this, mcc );
	}
}
