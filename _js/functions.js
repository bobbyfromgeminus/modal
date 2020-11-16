'use strict';


// Modal ablak és overlay megjelenítése
function showModal() {
    let overlay = document.querySelectorAll('.overlay');
    for (let i=0; i<overlay.length;i += 1) {
        overlay[i].setAttribute('class', 'overlay_show');
    
    }
    let modal = document.querySelectorAll('.modal');
    for (let i=0; i<modal.length;i += 1) {
        modal[i].setAttribute('class', 'modal_show');
    }
}

// Modal ablak és overlay elrejtése
function hideModal(state) {
    let overlay = document.querySelectorAll('.overlay_show');
    for (let i=0; i<overlay.length;i += 1) {
        overlay[i].setAttribute('class', 'overlay_hide');
        setTimeout(() => {
            overlay[i].setAttribute('class', 'overlay');
        }, 990);
    }
    let modal = document.querySelectorAll('.modal_show');
    for (let i=0; i<modal.length;i += 1) {
        modal[i].setAttribute('class', 'modal_hide');
        setTimeout(() => {
            modal[i].setAttribute('class', 'modal');
        }, 990);
    }
    console.log(state);
}


// Modal megjelenítő gomb eseménykezelője
let modalButton = document.getElementById('modal-button');
modalButton.addEventListener('click', function() {
    showModal();
    let okButton = document.getElementById('modal-button_ok');
    okButton.focus();
});

// Modal OK gomb eseménykezelője -> elrejtés
let okButton = document.getElementById('modal-button_ok');
okButton.addEventListener('click', function() {
    hideModal(true);        
});

// Modal CANCEL gomb eseménykezelője -> elrejtés
let cancelButton = document.getElementById('modal-button_cancel');
cancelButton.addEventListener('click', function() {
    hideModal(false);        
});

// Overlay eseménykezelője -> elrejtés
let overlay = document.getElementById('overlay');
overlay.addEventListener('click', function() {
    hideModal(false);        
});

// Modal X gomb eseménykezelője -> elrejtés
let modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() {
    hideModal(false);        
});