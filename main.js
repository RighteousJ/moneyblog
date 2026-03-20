document.addEventListener('DOMContentLoaded', () => {
    const fab = document.querySelector('.fab');
    const modal = document.getElementById('post-modal');
    const closeModal = document.querySelector('.close-button');
    const postForm = document.getElementById('post-form');
    const main = document.querySelector('main');

    // Show the modal
    fab.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Hide the modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Hide modal on outside click
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Handle post submission
    postForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;

        if (title && content) {
            const article = document.createElement('article');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');

            h2.textContent = title;
            p.textContent = content;

            article.appendChild(h2);
            article.appendChild(p);

            main.insertBefore(article, main.firstChild);

            // Clear form and close modal
            postForm.reset();
            modal.style.display = 'none';
        }
    });
});
