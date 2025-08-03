let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        const BtnValue = e.target.innerHTML;

        if (BtnValue === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = '';
            }
        } else if (BtnValue === 'AC') {
            string = '';
            input.value = string;
        } else if (BtnValue === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += BtnValue;
            input.value = string;
        }
    });
});

