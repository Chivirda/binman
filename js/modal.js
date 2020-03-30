const addButton = document.querySelector('.btn-add-job-seeker')
const divContent = document.querySelector('.content')
const modal = document.querySelector('#modal')


addButton.addEventListener('click', () => {
    modal.classList.toggle('modal')
})

