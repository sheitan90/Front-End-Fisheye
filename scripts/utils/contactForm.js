const body = document.querySelector('#body');
const buttonOpen = document.querySelector('.contact_button');
const buttonDiv = document.querySelector('.photograph-header');
const mainModal = document.querySelector('#contact_modal');
const sendMessage = document.querySelector('.send_button');
const closeButton = document.querySelector('.close-button');

//       const modal form     //
const prenom = document.querySelector('#first');
const nom = document.querySelector('#last');
const mail = document.querySelector('#email');
const msg = document.querySelector('#message');

const openModal = () => {
  body.classList.add('no-scroll');
  buttonDiv.setAttribute('aria-hidden', 'true');
  mainModal.setAttribute('aria-hidden', 'false');
  mainModal.style.display = 'block';
  closeButton.focus();
};

const closeModal = () => {
  body.classList.remove('no-scroll');
  buttonDiv.setAttribute('aria-hidden', 'false');
  mainModal.setAttribute('aria-hidden', 'true');
  mainModal.style.display = '';
  closeButton.focus();
};

buttonOpen.addEventListener('click', () => {
  openModal();
});

closeButton.addEventListener('click', () => {
  closeModal();
});

sendMessage.addEventListener('click', (e) => {
  e.preventDefault();
  closeModal();
  console.log(prenom.value, nom.value, mail.value, msg.value);
});

window.onkeydown = function onkeydown(event) {
  if (event.keyCode === 27) {
    closeModal();
  }
};
