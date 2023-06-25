'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpeneModal = document.querySelectorAll('.show-modal');
console.log(btnsOpeneModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const OpeneModal = function () {
  // console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpeneModal.length; i++) {
  btnsOpeneModal[i].addEventListener('click', OpeneModal);
}

// for (let i = 0; i < btnsOpeneModal.length; i++) {
//   btnsOpeneModal[i].addEventListener('click', function () {
//     // console.log('Button clicked');
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
