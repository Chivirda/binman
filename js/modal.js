const addButton = document.querySelector('.btn-add-job-seeker')
const modal = document.querySelector('#modal')
const closeModal = document.querySelector('.modal__close')

const fileName = document.querySelector('.form__file-name')
const inputPhoto = document.querySelector('#photo')

addButton.addEventListener('click', () => {
    modal.classList.toggle('closed')
})

closeModal.addEventListener('click', () => {
    modal.classList.toggle('closed')
})

inputPhoto.addEventListener('change', () => {
    console.log(inputPhoto.files[0]);
    
})