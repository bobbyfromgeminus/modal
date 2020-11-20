'use strict';


// Modal overlay megjelenítése
function showOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.setAttribute('class', 'overlay overlay_show');
}

// Modal ablak megjelenítése
function showModal() {
    const modal = document.querySelector('.modal');
    modal.setAttribute('class', 'modal modal_show');
}

// Modal overlay elrejtése
function hideOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.setAttribute('class', 'overlay overlay_hide');
}

// Modal ablak elrejtése
function hideModal(state) {
    const modal = document.querySelector('.modal');
    modal.setAttribute('class', 'modal modal_hide');
    const hideAnim = document.querySelector('.modal_hide');
    hideAnim.addEventListener("webkitAnimationEnd", myEndFunction);
    console.log(state);
}

function modalDisplayNone() {
    const modal = document.querySelector('.modal_hide');
    modal.setAttribute('class', 'modal modal_hide modal_none');
}

function overlayDisplayNone() {
    const overlay = document.querySelector('.modal_hide');
    overlay.setAttribute('class', 'overlay overlay_hide overlay_none');
}


function clickOpenModal() {
    showOverlay();
    showModal();
    const okButton = document.getElementById('modal-button_ok');
    okButton.focus(); 
    alert(element);  
}

function clickHideModal(state) {
    hideOverlay();
    hideModal(state);        
}

// Eseménykezelő a megjelenítéshez
function openEventListener(id, state){
    const element = document.getElementById(id);
    element.addEventListener('click', () => clickOpenModal(state));
}

// Eseménykezelő az elrejtéshez
function hideEventListener(id, state){
    const element = document.getElementById(id);
    element.addEventListener('click', () => clickHideModal(state));
}


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