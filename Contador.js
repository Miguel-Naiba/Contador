const btnsomar = document.getElementById('somar');
const btnsubtrair = document.getElementById('subtrair');
const p = document.getElementById('contador');

let contador = 0;
p.innerHTML = contador;

btnsomar.addEventListener('click', function () {
    p.innerHTML = ++contador;
})
btnsubtrair.addEventListener('click', function () {
    p.innerHTML = --contador;
})
