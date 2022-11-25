form['nome'].addEventListener("keyup", () => {
    const costumerName = document.querySelector("#name-card");

    if (form['nome'].value == '') {
        costumerName.textContent = 'NOME COMPLETO'
    } else {
        costumerName.textContent = form['nome'].value;
    }

});

form['mes'].addEventListener('keyup', () => {
    const month = document.querySelector('#mes-card');

    if (form['mes'].value == '') {
        month.textContent = '00/'
    } else {
        month.textContent = `${form['mes'].value}/`;
    }
})

form['ano'].addEventListener('keyup', () => {
    const year = document.querySelector('#ano-card');

    if (form['ano'].value == '') {
        year.textContent = '00'
    } else {
        year.textContent = form['ano'].value;
    }
})

form['cvc'].addEventListener('keyup', () => {
    const cvc = document.querySelector('#cvc-card');

    if (form['cvc'].value == '') {
        cvc.textContent = 'cvc'
    } else {
        cvc.textContent = form['cvc'].value;
    }
})

form['numero'].addEventListener('keyup', event => {
    event.preventDefault();

    const numCard = document.querySelector('#num-card');

    if (form['numero'].value == '') {
        numCard.textContent = '0000 0000 0000 0000'
    } else {
        numCard.textContent = form['numero'].value;
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
	id('numero').onkeypress = function(){
		mascara( this, mcc );
	}
}
