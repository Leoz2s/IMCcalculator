import { Modal } from './modal.js'
import { alertError } from "./alert-error.js"
import { calculateIMC, notNumber} from "./utils.js"

// variables (variáveis)
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const alertErrorElement = document.querySelector('.alert-error')

// 3 ways to create and assign functions on a event
// form.onsubmit = function () {}

// form.onsubmit = () => {}

// form.onsubmit = handleSubmit
// function handleSubmit() {}


form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value // Standard value "" is the same as 0
  const height = inputHeight.value // Standard value "" is the same as 0

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if(weightOrHeightIsNotANumber) {
    alertError.open()
    return // Impede que o resto do escopo seja executado
  }

  alertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)

  return // Cancela a execução do resto da função

  if(notNumber(weight) === false && notNumber(height) === false) {
    alertErrorElement.classList.remove('open')

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`
  
    Modal.message.innerText = message
    Modal.open() // modalWrapper.classList.add('open')

  } else {
    alertErrorElement.classList.add('open')
  } 

}

// form.onsubmit = event => {
//   console.log(event)
//   event.preventDefault()

//   const weight = inputWeight.value
//   const height = inputHeight.value

//   console.log(weight, height)
// }


// form.onsubmit = handleSubmit
// function handleSubmit(event) {
//   console.log(event)
//   event.preventDefault()

//   const weight = inputWeight.value
//   const height = inputHeight.value

//   console.log(weight, height)
// }

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open() // modalWrapper.classList.add('open')
}

// - Desafio:
// Fechar a janela de erro ao digitar no campo
// O nome do evento é "input"

function closeErrorAlert() {
  alertError.close()
  console.log("Disparado o evento 'input'")
}
form.addEventListener('input', closeErrorAlert)
// inputWeight.addEventListener('input', function() {
//   alertError.close()
// })
// inputHeight.addEventListener('input', event => {
//   alertError.close()
// })

// form.oninput = closeErrorAlert
// inputWeight.oninput = () => alertError.close()
// inputHeight.oninput = closeErrorAlert()


// A função com () no evento faz com que a função seja executada uma única vez, enquanto sem elas ela pode ser repetida.
// function() -> Works once // function -> Works multiple times
