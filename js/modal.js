const addButton = document.querySelector('.btn-add-job-seeker')
const modal = document.querySelector('#modal')
const closeModal = document.querySelector('.modal__close')

const fileInputs = document.querySelectorAll('input[type="file"]')
const btnCancel = document.querySelector('.btn-cancel')

addButton.addEventListener('click', () => {
    modal.classList.toggle('closed')
})

closeModal.addEventListener('click', () => {
    modal.classList.toggle('closed')
})

for (let input of fileInputs) {
    input.addEventListener('change', () => {
        let inputName = document.querySelector(`#${input.id}-name`)
        inputName.textContent = input.files[0].name
    })
}

btnCancel.addEventListener('click', () => {
    document.querySelector('#modal-form').reset()
})