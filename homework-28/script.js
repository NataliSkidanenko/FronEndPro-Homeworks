const list = [1, 2, [1, 2, 3], 3, 4, [1, 2, [1, 2, 3], 3], 5, 6, [1, 2, 3], 7];
const incorrectList = [1, 2, [1, 2, [1, 2, 3]], 5, [1, 2, 3], [1, 2, 3]];
let index = [];

const body = document.querySelector('body');
body.appendChild(generateList(list)); // or body.insertAdjacentHTML('beforeend', generateList(list).outerHTML);
body.appendChild(generateList(incorrectList));

function generateList(list) {
    if (validateList(list)) {
        const newList = document.createElement('ul');

        for (let i = 0; i <= list.length; i++) {
            if (i === list.length) {
                index.splice(index.length - 1, 1);
                return newList;
            }

            if (!Array.isArray(list[i])) {
                if (index.length === 0) {
                    newList.insertAdjacentHTML('beforeend', `<li>${list[i]}</li>`);
                } else {
                    newList.insertAdjacentHTML(
                        'beforeend',
                        `<li>${index.join('.')}.${list[i]}</li>`
                    );
                }

                if (Array.isArray(list[i + 1])) {
                    index.push(list[i]);
                }
            }

            if (Array.isArray(list[i])) {
                newList.insertAdjacentHTML('beforeend', generateList(list[i]).outerHTML);
            }
        }
    } else {
        const message = document.createElement('p');
        message.insertAdjacentText('beforeend', 'Список не створено через некорректні дані');
        return message;
    }
}

function validateList(list) {
    for (let i = 0; i <= list.length - 2; i++) {
        if (Array.isArray(list[i]) && Array.isArray(list[i + 1])) {
            return false;
        }
        if (Array.isArray(list[i])) {
            validateList(list[i]);
        }
    }
    return true;
}

// function generateList(list) {
//     if (validateList(list)) {
//         const listInHtml = document.querySelectorAll('.list');
//         const lastList = listInHtml[listInHtml.length - 1];

//         for (let i = 0; i < list.length; i++) {
//             if (!Array.isArray(list[i])) {
//                 if (depth === 1) {
//                     lastList.insertAdjacentHTML('beforeend', `<li>${list[i]}</li>`);
//                 } else {
//                     lastList.insertAdjacentHTML(
//                         'beforeend',
//                         `<li>${index.join('.')}.${list[i]}</li>`
//                     );
//                 }
//                 if (Array.isArray(list[i + 1])) {
//                     index.push(list[i]);
//                 }
//             }

//             if (Array.isArray(list[i])) {
//                 depth = depth + 1;
//                 lastList.insertAdjacentHTML('beforeend', `<ul class = "list"></ul>`);
//                 generateList(list[i]);
//             }

//             if (i === list.length - 1) {
//                 depth = depth - 1;
//                 index.splice(index.length - 1, 1);
//             }
//         }
//     }
// }
// const newList = document.createElement('ul');
