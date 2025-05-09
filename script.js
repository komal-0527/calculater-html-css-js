let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = '';
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnValue = e.target.innerHTML;

        if (btnValue === '=') {
            try {
                string = eval(string);
            } catch {
                string = "Error";
            }
            input.value = string;
        }
        else if (btnValue === 'AC') {
            string = '';
            input.value = string;
        }
        else if (btnValue === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            string += btnValue;
            input.value = string;
        }
    });
});
