const addButton = document.querySelector('.btn-add-job-seeker')
const divContent = document.querySelector('.content')
const modal = document.querySelector('#modal')
const closeModal = document.querySelector('.modal__close')


addButton.addEventListener('click', () => {
    modal.classList.toggle('closed')
})

closeModal.addEventListener('click', () => {
    modal.classList.toggle('closed')
})