'use strict';

/*
-------------------------
         OVERLAY
-------------------------
*/
//      megjelenítése
function showOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.setAttribute('class', 'overlay overlay_show');
}
//      elrejtése
function hideOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.setAttribute('class', 'overlay overlay_hide');
    const overlayEnd = document.querySelector('.overlay_hide');
    overlayEnd.addEventListener("webkitAnimationEnd", overlayDisplayNone);
}
//      Diplay: none
function overlayDisplayNone() {
    const overlay = document.querySelector('.overlay_hide');
    overlay.setAttribute('class', 'overlay overlay_hide overlay_none');
    overlay.removeEventListener("webkitAnimationEnd", overlayDisplayNone, false);
}


/*
-------------------------
      MODAL ABLAK
-------------------------
*/
//      megjelenítése
function showModal() {
    const modal = document.querySelector('.modal');
    modal.setAttribute('class', 'modal modal_show');
}
//      elrejtése
function hideModal(state) {
    const modal = document.querySelector('.modal');
    modal.setAttribute('class', 'modal modal_hide');
    const modalEnd = document.querySelector('.modal_hide');
    modalEnd.addEventListener("webkitAnimationEnd", modalDisplayNone);
    console.log(state);
}
//      Diplay: none
function modalDisplayNone() {
    const modal = document.querySelector('.modal_hide');
    modal.setAttribute('class', 'modal modal_hide modal_none');
    modal.removeEventListener("webkitAnimationEnd", modalDisplayNone, false);
}


/*
-------------------------
  SHOW/HIDE MEGHÍTÁSOK
-------------------------
*/
//      megjelenítéshez
function clickOpenModal() {
    showOverlay();
    showModal();
    const okButton = document.getElementById('modal-button_ok');
    okButton.focus();  
}
//      elrejtéshez
function clickHideModal(state) {
    hideOverlay();
    hideModal(state);        
}


/*
-------------------------
     ESEMÉNYKEZELŐK
-------------------------
*/
//      megjelenítéshez
function openEventListener(id, state){
    const element = document.getElementById(id);
    element.addEventListener('click', () => clickOpenModal(state));
}
//      elrejtéshez
function hideEventListener(id, state){
    const element = document.getElementById(id);
    element.addEventListener('click', () => clickHideModal(state));
}


/*
-------------------------
ESEMÉNYKEZELŐK MEGHÍVÁSAI
-------------------------
*/
// Modal megjelenítő gomb -> megjelenítés
openEventListener('modal-button', true);
// Modal OK gomb -> elrejtés
hideEventListener('modal-button_ok', true);
// Modal CANCEL gomb -> elrejtés
hideEventListener('modal-button_cancel', false);
// Overlay -> elrejtés
hideEventListener('overlay', false);
// Modal X gomb -> elrejtés
hideEventListener('modal-close', false);