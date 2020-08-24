function somar(a, b) { return a + b; }
function exec(fn, a, b) { return fn(a,b); }
const r = exec(somar, 18, 20);

console.log(r);

const fn = () => console.log('exec');
setInterval(fn, 1000)