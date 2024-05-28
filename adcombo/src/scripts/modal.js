const modal = document.querySelector('.modal-overlay');
const modalWindow = document.querySelector('.modal-window');
const modalBtnClose = document.querySelector('.modal-window__btn-close');
const modalBtnShow = document.querySelector('.header-btns__burger-menu');

export function initFuncModal() {
    modalWindow.onclick = () => event.stopPropagation()

    modalBtnShow.onclick = () => modal.classList.add('modal-show')
    modal.onclick = () => modal.classList.remove('modal-show')
    modalBtnClose.onclick = () => modal.classList.remove('modal-show')
}