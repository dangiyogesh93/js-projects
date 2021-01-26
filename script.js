const showModal = document.querySelectorAll('.modalBox');
console.log(showModal);
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const hide = document.querySelector('.hidden');
const modal = document.querySelector('.modal');

// showModal[0].addEventListener('click', function () {
//   console.log('button clicked');
//   overlay.classList.remove('hidden');
//   modal.classList.remove('hidden');
// });
for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', function () {
    console.log('button clicked');
    overlay.classList.remove('hidden');
    modal.classList.remove('hidden');
  });
btnCloseModal.addEventListener('click', function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
});
