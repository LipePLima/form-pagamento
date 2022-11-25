const button = document.querySelector('#button');
const form  = document.querySelector('#form');

button.addEventListener('click', event => {
    event.preventDefault();

    form.reset()
})

form['nome'].addEventListener("keyup", event => {
    event.preventDefault();

    const costumerName = document.querySelector("#name-card");
    costumerName.textContent = form['nome'].value;
});

form['numero'].addEventListener('keyup', event => {
    event.preventDefault();

    const numCard = document.querySelector('#num-card');

    if (form['numero'].value == '') {
        numCard.textContent = '0000 0000 0000 0000'
    } else {
        numCard.textContent = form['numero'].value;
    }
})

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1)
}
function execmascara(){
    v_obj.value=v_fun(v_obj.value)
}
function mcc(v){
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
