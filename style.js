const container = document.querySelector('div.container');
const checboxEl = document.createElement('input');
checboxEl.type = 'checkbox';
checboxEl.id = 'agreement';
const labelEl = document.createElement('label');
labelEl.innerHTML = 'Согласен с условиями';
labelEl.for = 'agreement';
container.appendChild(labelEl);
convtainer.appendChild(checboxEl);
const buttonEl = document.createElement('button');
buttonEl.innerHTML = "Отправить";
container.appendChild(buttonEl);
buttonEl.addEventListener('click', function (e) {
    if (!checboxEl.checked) {
        const textEl = document.createElement('p');
        textEl.innerHTML = 'Необходимо согласиться с условиями';
        container.appendChild(textEl);
    }
});
const container = document.querySelector('div.container');
const buttonEl = document.createElement('button');
buttonEl.innerHTML = "Отправить";

const radioElOne = document.createElement('input');
radioElOne.type = 'radio';
radioElOne.id = 'radio_1';
radioElOne.name = 'drink';
const labelElOne = document.createElement('label');
labelElOne.innerHTML = 'Чай';
labelElOne.for = 'tea';
const radioElTwo = document.createElement('input');
radioElTwo.type = 'radio';
radioElTwo.id = 'radio_2';
radioElTwo.name = 'drink';
const labelElTwo = document.createElement('label');
labelElTwo.innerHTML = 'Кофе';
labelElTwo.for = 'coffee';
container.appendChild(radioElOne);
container.appendChild(labelElOne);
container.appendChild(radioElTwo);
container.appendChild(labelElTwo);
container.appendChild(buttonEl);
buttonEl.addEventListener('click', function (e) {
    const textEl = document.createElement('p');
    if (radioElOne.checked) {
        textEl.innerHTML = 'Чай закончился';
        container.appendChild(textEl);
    } else if (radioElTwo.checked) {
        textEl.innerHTML = 'Кофе закончился';
        container.appendChild(textEl);
    }
});

const inputEl = document.createElement('input');
inputEl.type = 'text';
const buttonEl = document.createElement('button');
buttonEl.innerHTML = "Отправить";
container.appendChild(inputEl);
container.appendChild(buttonEl);
buttonEl.addEventListener('click', function (e) {
    if (inputEl.value.toLocaleLowerCase() === 'password') {
        inputEl.classList.remove('red-border');
        inputEl.classList.add('green-border');
    } else {
        inputEl.classList.remove('green-border');
        inputEl.classList.add('red-border');
    }
});

const inputEl = document.createElement('input');
inputEl.type = 'text';
container.appendChild(inputEl);
const titleEl = document.createElement('h1');
titleEl.innerHTML = 'Title';
container.appendChild(titleEl);
inputEl.addEventListener('change', function (e) {
    titleEl.innerHTML = e.target.value;
});