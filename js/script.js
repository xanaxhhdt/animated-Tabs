'use strict';

const tabBtns = Array.from(document.querySelectorAll('#tab_btn'));

tabBtns.forEach(item => {
   item.addEventListener('click', onTabBtnClick);
});

function onTabBtnClick(e) {
   e.preventDefault();

   const btn = e.target.closest('#tab_btn');
   changeBtn(btn);
}

function changeBtn(btn) {

}