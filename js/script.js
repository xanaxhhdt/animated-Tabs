'use strict';

const tabBtns = Array.from(document.querySelectorAll('#tab_btn'));
const tabIndicator = document.querySelector('#tab_indicator');
const tabSlide = Array.from(document.querySelectorAll('#tab_slide'));

tabBtns[0].classList.add('active');
tabSlide[0].classList.add('active');

let activeBtn = tabBtns[0];
let activeSlide = tabSlide[0];

tabBtns.forEach(item => {
   item.addEventListener('click', onTabBtnClick);
});

function onTabBtnClick(e) {
   e.preventDefault();

   const btn = e.target.closest('#tab_btn');
   changeBtn(btn);
}

function changeBtn(btn) {
   if (btn.classList.contains('active')) {
      return;
   } 
   activeBtn.classList.remove('active');
   btn.classList.add('active');
   activeBtn = btn;
   
   changeIndicator(btn);
}

function changeIndicator(btn) {
   const indexBtn = tabBtns.indexOf(btn);
   tabIndicator.style.left = `calc(${indexBtn} * 100% / 4)`;

   changeSlide(indexBtn);
}

function changeSlide(index) {
   activeSlide.classList.remove('active');
   tabSlide[index].classList.add('active');
   activeSlide = tabSlide[index];
}