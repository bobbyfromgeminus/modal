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
function hideModal(state) {
    let modal = document.querySelectorAll('.modal_show');
    for (let i=0; i<modal.length;i += 1) {
        modal[i].setAttribute('class', 'modal_hide');
        setTimeout(() => {
            modal[i].setAttribute('class', 'modal');
        }, 990);
    }
    console.log(state);
}


function clickOpenModal() {
    showOverlay();
    showModal();
    let okButton = document.getElementById('modal-button_ok');
    okButton.focus();   
}

function clickHideModal(state) {
    hideOverlay();
    hideModal(state);        
}

// Eseménykezelő a megjelenítéshez
function openEventListener(id, state){
    let element = document.getElementById(id);
    element.addEventListener('click', () => clickOpenModal(state));
}

// Eseménykezelő az elrejtéshez
function hideEventListener(id, state){
    let element = document.getElementById(id);
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