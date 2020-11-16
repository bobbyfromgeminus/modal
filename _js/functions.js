'use strict';


// Modal overlay megjelenítése
function showOverlay() {
    let overlay = document.querySelectorAll('.overlay');
    for (let i=0; i<overlay.length;i += 1) {
        overlay[i].setAttribute('class', 'overlay_show');
    
    }
}

// Modal ablak megjelenítése
function showModal() {
    let modal = document.querySelectorAll('.modal');
    for (let i=0; i<modal.length;i += 1) {
        modal[i].setAttribute('class', 'modal_show');
    }
}

// Modal overlay elrejtése
function hideOverlay(state) {
    let overlay = document.querySelectorAll('.overlay_show');
    for (let i=0; i<overlay.length;i += 1) {
        overlay[i].setAttribute('class', 'overlay_hide');
        setTimeout(() => {
            overlay[i].setAttribute('class', 'overlay');
        }, 990);
    }
}

// Modal ablak elrejtése
function hideModal() {
    let modal = document.querySelectorAll('.modal_show');
    for (let i=0; i<modal.length;i += 1) {
        modal[i].setAttribute('class', 'modal_hide');
        setTimeout(() => {
            modal[i].setAttribute('class', 'modal');
        }, 990);
    }
}


function clickOpenModal() {
    showOverlay();
    showModal();
    let okButton = document.getElementById('modal-button_ok');
    okButton.focus();   
}

function clickHideModal(state) {
    hideOverlay();
    hideModal();        
}

// Modal megjelenítő gomb eseménykezelője
let modalButton = document.getElementById('modal-button');
modalButton.addEventListener('click', clickOpenModal);

// Modal OK gomb eseménykezelője -> elrejtés
let okButton = document.getElementById('modal-button_ok');
okButton.addEventListener('click', clickHideModal);

// Modal CANCEL gomb eseménykezelője -> elrejtés
let cancelButton = document.getElementById('modal-button_cancel');
cancelButton.addEventListener('click', clickHideModal);

// Overlay eseménykezelője -> elrejtés
let overlay = document.getElementById('overlay');
overlay.addEventListener('click', clickHideModal);

// Modal X gomb eseménykezelője -> elrejtés
let modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', clickHideModal);