'use strict';

// * ---------------------------------------------------------
// * Selectors
// * ---------------------------------------------------------

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnsCloseModal = document.querySelector('.close-modal');

// * ---------------------------------------------------------
// * functions
// * ---------------------------------------------------------

const openModal = function(){
     modal.classList.remove('hidden');
     overlay.classList.remove('hidden');
}
const closeModal = function(){
     modal.classList.add('hidden');
     overlay.classList.add('hidden');
}

// * ---------------------------------------------------------
// * event listners
// * ---------------------------------------------------------


// open modal
for(let i = 0; i < btnsOpenModal.length ; i++){
     btnsOpenModal[i].addEventListener('click', openModal);
}

// close modals
// ! on btn click
btnsCloseModal.addEventListener('click', closeModal);
// ! on overlay(background) click
overlay.addEventListener('click', closeModal);
// ! on escape key press
document.addEventListener('keydown',function(e){
     if(e.key=='Escape' && !modal.classList.contains('hidden')){
          closeModal();
     }
})
