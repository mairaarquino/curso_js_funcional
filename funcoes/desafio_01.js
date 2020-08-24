// somar(1)(2)(3)
const somar = function(value1) {
    return function(value2) {
        return function(value3) {
            return value1 + value2 + value3;
        }
    }
}

const resultado = somar(3)(4)(13)
console.log(resultado);

// calcular(3)(7)(fn)
// fn(soma, sub, div, mult)
const calcular = function(value1) {
    return function(value2) {
        return function(fn) {
            fn(value1, value2);
        }
    }
}
const resultadoo = calcular(3)(7)('-');
console.log(resultadoo);

