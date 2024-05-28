import { initFuncModal } from './modal';
import { launchTimer } from './timer'

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    spaceBetween: 50,
});

launchTimer();
initFuncModal();