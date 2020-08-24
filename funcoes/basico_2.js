function executar(fn) {
    if(typeof fn === 'function') {
        fn();
    } else {
        console.log('Isso não é uma função! =(');
    }
}

const bomdia = function() {
    console.log('Bom dia!')
}

const boatarde = function() {
    console.log('Boa tarde!')
}

executar(bomdia);
executar(boatarde);
executar(3);

// Retornando uma função

const potencia = base => exp => Math.pow(base, exp);


// const potencia2 = potencia(2);
console.log(potencia(2)(10));