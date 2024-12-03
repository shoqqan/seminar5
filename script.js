// task 1

// Используя условный (тернарный) оператор перенаправьте
// сайт на "https://google.com" если ваш браузер Chrome
// иначе перенаправить на сайт "https://wikipedia.org"
// window.location.href = /Chrome/.test(navigator.userAgent)
//     ? "https://google.com/"
//     : "https://wikipedia.org/";
//
//
//
// navigator.userAgent.includes('Chrome')
//     ? (window.location.href = 'https://google.com/')
//     : (window.location.href = 'https://wikipedia.org/');
//
//
// const isChrome = navigator.userAgent.includes("Chrome");
// window.location.href = isChrome ? "https://google.com/" : "https://wikipedia.org/";


//task 2

// const arr = ['Hit gym', 'Study React', 'Coffee time', 'Forget JQuery'];
//
// const list = document.getElementById('list');
// for (let i = 0; i < arr.length; i++) {
//
//     const listItem = document.createElement('li');
//
//     listItem.textContent = arr[i];
//
//     list.appendChild(listItem);
// }

// const arr = ['Hit gym', 'Study React', 'Coffee time', 'Forget JQuery'];

// Селектор для списка UL
// const listElement = document.getElementById('list');

// Отображение элементов массива в списке UL
// arr.forEach(task => {
//     const listItem = document.createElement('li');
//     listItem.textContent = task;
//     listElement.appendChild(listItem);
// });


//task 3


// Используя только DOM и JS, если размер экрана меньше 740px
// "отпустите" кнопку вниз шапки и оцентруйте
// Для того чтобы слушать изменения экрана в реальном времени
// можно использовать window.addEventListener("resize",function)

function adjustButtonPosition() {
    const button = document.getElementById('header__btn');
    const header = document.querySelector('header');

    if (window.innerWidth < 740) {
        header.style.flexDirection = 'column';

    } else {
        header.style.flexDirection = 'row';

    }
}

adjustButtonPosition();
window.addEventListener('resize', adjustButtonPosition);
