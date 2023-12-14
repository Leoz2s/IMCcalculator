// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')
export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),


  // open: function() {Modal.wrapper.classList.add('open')},
  // close: function() {Modal.wrapper.classList.remove('open')}
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => Modal.close() //modalWrapper.classList.remove('open')
// Se o código acima não foi importado, porque ele funciona?


// Variável "global" -> window
// window.onkeydown = handleKeyDown
// Por que não usar da forma acima? Porque todo evento com .on(...) é aceito como um caso único. Se houver mais de um, será considerado somente o último.
// Já o .addEventListener() é considerado todas as vezes.

window.addEventListener('keydown', handleKeyDown) // event => {} // function(event) {}

function handleKeyDown(event) {
  console.log(event.key)
  if(event.key === "Escape") {
    Modal.close()
  }
}