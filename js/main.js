const inputs = document.querySelectorAll('.input');

function focusFunc() {
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');

}

function blurFunc() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
        parent.classList.remove('focus');
    }

}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
})

// code for taunt animation

const loginButton = document.querySelector('.btn');
const form = document.querySelector('form');

loginButton.addEventListener('click', (event) => {
    event.preventDefault();

    const fields = [...document.querySelectorAll('input')];

    fields.forEach(field => {
        if(field.value === '') {
            form.classList.add('validate-error');
        }
    });

    const formError = document.querySelector('.validate-error');

    if(formError) {
        formError.addEventListener('animationend', (event) => {
            if (event.animationName === 'taunt') {
                formError.classList.remove('validate-error');
            }
        })
    } 

    else {
        form.classList.add("form-hide");
    }
});