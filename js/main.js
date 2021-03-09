// const limitBar = document.querySelector('.cards__limit-bar'),
//       limitSpent = document.querySelector('.cards__limit-value-spent'),
//       limitTotal = document.querySelector('.cards__limit-value-total');

// function limit () {
//   let sum = limitBar.style.width = `${(limitSpent.textContent * 100)/ limitTotal.textContent}%`;

//   return sum;
// }

// limit();

'use strict'

window.addEventListener('DOMContentLoaded', () => {

    const addGoalBtn = document.querySelector('#add-goal'),
        overlay = document.querySelector('.overlay'),
        modalGoal = document.querySelector('.modal-goal'),
        modalInputSum = document.querySelector('#goal-sum'),
        modalInputDate = document.querySelector('#goal-date'),
        modalInputName = document.querySelector('#goal-name'),
        modalCloseBtn = document.querySelectorAll('.modal__close'),
        goalsContainer = document.querySelector('.goals__cards'),
        transferInput = document.querySelector('#transfer-value'),
        modalTransfer = document.querySelector('.modal__transfer'),
        transferResultContainer = document.querySelector('.modal__transfer-result'),
        newTransfer = document.querySelector('.new__transfer');


    function showModal(whichModal) {
        overlay.classList.add('active');
        whichModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function hideModal(whichModal) {
        overlay.classList.remove('active');
        whichModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    addGoalBtn.addEventListener('click', () => {
        showModal(modalGoal);
    });


    overlay.addEventListener('click', (event) => {
        if (event.target == overlay || event.target == modalCloseBtn) {
            hideModal(modalGoal);
        }
    });
    modalCloseBtn.forEach((item) => {
        item.addEventListener('click', () => {
            hideModal(modalGoal);
        })
    });
    function addSlide() {
        
    }
   


    newTransfer.addEventListener('submit', (e) => {
        e.preventDefault();
        if (transferInput.value) {
            transferResultContainer.innerHTML = `<p class="modal__transfer-result-value">Your ${transferInput.value}$ are not yours anymore ;-)</p>`;;
            showModal(modalTransfer);
            transferInput.value = '';
            setTimeout(() => {
                hideModal(modalTransfer);
            }, 5000)
        }
    })

    const cardsSwiper = new Swiper('.cards__slider', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.cards__arrow_right',
            prevEl: '.cards__arrow_left',
        },
    });

    const goalsSwiper = new Swiper('.goals__content', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        centeredSlides: true,
        loop: true,
        cssMode: true,
        
        // Navigation arrows
        navigation: {
            prevEl: '.goals__arrow_left',
            nextEl: '.goals__arrow_right',
        },
    });

    modalGoal.addEventListener('submit', () => {
        if (modalInputSum.value && modalInputDate.value && modalInputName) {
            const newGoal = document.createElement('div');
            newGoal.classList.add('goals__card', 'swiper__slide');
            newGoal.innerHTML = `
                <div class="goals__goal">
                  <p class="goals__sum">$${modalInputSum.value}</p>
                  <p class="goals__date">${modalInputDate.value}</p>
                </div>
                <div class="goals__name">
                  <img src="icons/icon-custom.svg" alt="Custom image" />
                  <p>${modalInputName.value}</p>
                </div>
              `;
            // goalsContainer.append(newGoal);
            goalsSwiper.prependSlide(newGoal);
            modalInputSum.value = '';
            modalInputDate.value = '';
            modalInputName.value = '';
            hideModal(modalGoal);
        }
    });

});