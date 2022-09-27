let display = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn');
let clear = document.querySelector('.btn-clear');
let remove = document.querySelector('.btn-delete');
let percent = document.querySelector('#btn-percent');
let equal = document.querySelector('.btn-equal');

buttons.forEach(
    function (button) {
        button.addEventListener('click', function (e) {
            let value = e.target.dataset.num;
            display.value += value;
        })
    });

equal.addEventListener('click', function (e) {
    let answer = eval(display.value);
    display.value = answer;

});

clear.addEventListener('click', function (e) {
    display.value = "";
})

remove.addEventListener('click', function (e) {
   display.value = display.value.slice(2, 1);
})