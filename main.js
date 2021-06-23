const input = document.querySelector('.input-field')
const add = document.querySelector('.add-btn')

const contacts = document.querySelector('.contacts')

add.onclick = addContact

function addContact() {
    let chip = document.createElement('div')
    chip.classList.add('chip')
    let pic = document.createElement('img')
    pic.src = "/images/avatar.png"
    let name = document.createElement('p')
    name.innerText = input.value
    let button = document.createElement('button')
    button.onclick = deleteContact
    button.innerText = 'X'
    chip.appendChild(pic)
    chip.appendChild(name)
    chip.appendChild(button)
    contacts.appendChild(chip)
    input.value = ''
}

function deleteContact(e) {
    contacts.removeChild(e.target.parentNode)
}