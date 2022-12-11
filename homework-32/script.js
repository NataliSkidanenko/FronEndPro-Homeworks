const postElement = document.querySelector('.post');
const commentsElement = document.querySelector('.comments');
const errorElement = document.querySelector('.error');
const buttonShowPost = document.querySelector('#button-show-post');
const buttonShowComments = document.querySelector('#button-show-comments');
const inputId = document.querySelector('#id-post');

inputId.addEventListener('blur', isCorrectNumber);
buttonShowPost.addEventListener('click', showPost);
buttonShowComments.addEventListener('click', showPostComments);

function showPost(ev) {
    ev.preventDefault();
    commentsElement.innerHTML = '';
    postElement.innerHTML = '';
    buttonShowComments.style.visibility = 'hidden';
    if (isCorrectNumber()) {
        const id = inputId.value;
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                if (response.status === 404) {
                    throw new Error();
                }
                return response.json();
            })
            .then(({userId, title, body}) => {
                errorElement.textContent = '';
                buttonShowComments.style.visibility = 'visible';
                postElement.innerHTML = `<p data-post-id="${id}">Post ${id}:</p><p>User ID: ${userId}:</p><p>Title: ${title}:</p><p>Body: ${body}:</p>`;
            })
            .catch(() => {
                postElement.innerHTML = '';
                errorElement.textContent = 'Oops, something went wrong';
            });
    }
}

function showPostComments(ev) {
    ev.preventDefault();
    commentsElement.innerHTML = '';
    const id = document.querySelector('p[data-post-id]').dataset.postId;
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => response.json())
        .then((data) => {
            data.forEach(({id, name: userName, email, body}) => {
                commentsElement.insertAdjacentHTML(
                    'beforeend',
                    `<div class="comment"><p>Comments ${id}:</p><p>User name: ${userName}:</p><p>Email: ${email}:</p><p>Body: ${body}:</p></div>`
                );
            });
        })
        .catch(() => {
            commentsElement.textContent = 'Oops, something went wrong';
        });
}

function isCorrectNumber() {
    errorElement.textContent = '';
    const id = Number(inputId.value);

    if (id > 100 || id < 1 || isNaN(id) || !id) {
        errorElement.textContent = 'Enter a number in the range 1-100 ';
        return false;
    }
    return true;
}
