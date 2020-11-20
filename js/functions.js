'use strict';
/*
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                    MODAL ÉS OVERLAY VEZÉRLÉSE
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
*/

/*
-------------------------
         ELEMEK
-------------------------
*/
//      bejártható elemek
const eOne = document.querySelector('.modal-button_ok');
const eTwo = document.querySelector('.modal-button_cancel');
const eThree = document.querySelector('.modal-close');

/*
-------------------------
     TABINDEX LOOP
-------------------------
*/
//      tabindex loop - tabindex növelés, amikor a close gomb fókuszba kerül
function changeTabIndexFocus(ownName) {
    let eOneTab = parseInt(eOne.tabIndex);
    let eTwoTab = parseInt(eTwo.tabIndex);
    if (ownName==='modal-close') {
        eOne.setAttribute('tabindex', eOneTab+3);
        eTwo.setAttribute('tabindex', eTwoTab+3);
    }
}
//      tabindex loop - tabindex növelés, amikor a close gombról lekerül a fókusz
function changeTabIndexFocusOut(ownName) {
    let eThreeTab = parseInt(eThree.tabIndex);
    if (ownName==='modal-close') {
        eThree.setAttribute('tabindex', eThreeTab+3);
    }
}

/*
-------------------------
     ESEMÉNYKEZELŐK
-------------------------
*/
//      focus eseménykezelő
function focusListener(ownName){
    const focusElement = document.querySelector('.'+ownName);
    focusElement.addEventListener('focus', () => changeTabIndexFocus(ownName));
}
//      focusout eseménykezelő
function focusOutListener(ownName){
    const focusOutElement = document.querySelector('.'+ownName);
    focusOutElement.addEventListener('focusout', () => changeTabIndexFocusOut(ownName));
}

/*
-------------------------
ESEMÉNYKEZELŐK MEGHÍVÁSAI
-------------------------
*/
//      close gomb focus
focusListener('modal-close');
//      close gomb focusout
focusOutListener('modal-close');




/*
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                    MODAL ÉS OVERLAY VEZÉRLÉSE
|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
*/

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
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    const menu = document.querySelector('.menu');
    const foot = document.querySelector('.footer');
    header.setAttribute('class', 'header blur');
    main.setAttribute('class', 'main blur');
    menu.setAttribute('class', 'menu blur');
    foot.setAttribute('class', 'footer blur');
}
//      elrejtése
function hideModal(state) {
    const modal = document.querySelector('.modal');
    modal.setAttribute('class', 'modal modal_hide');
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    const menu = document.querySelector('.menu');
    const footer = document.querySelector('.footer');
    header.setAttribute('class', 'header');
    main.setAttribute('class', 'main');
    menu.setAttribute('class', 'menu');
    footer.setAttribute('class', 'footer');
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
    eOne.setAttribute('tabindex', 1);
    eTwo.setAttribute('tabindex', 2);
    eThree.setAttribute('tabindex', 3);
    const okButton = document.querySelector('.modal-button_ok');
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
function openEventListener(className, state){
    const element = document.querySelector(className);
    element.addEventListener('click', () => clickOpenModal(state));
}
//      elrejtéshez
function hideEventListener(className, state){
    const element = document.querySelector(className);
    element.addEventListener('click', () => clickHideModal(state));
}

/*
-------------------------
ESEMÉNYKEZELŐK MEGHÍVÁSAI
-------------------------
*/
// Modal megjelenítő gomb -> megjelenítés
openEventListener('.modal-button', true);
// Modal OK gomb -> elrejtés
hideEventListener('.modal-button_ok', true);
// Modal CANCEL gomb -> elrejtés
hideEventListener('.modal-button_cancel', false);
// Overlay -> elrejtés
hideEventListener('.overlay', false);
// Modal X gomb -> elrejtés
hideEventListener('.modal-close', false);