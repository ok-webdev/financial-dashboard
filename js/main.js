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
        goalsContainer = document.querySelector('.goals__cards');
        console.log(goalsContainer);
    function showModalGoal() {
        overlay.classList.add('active');
        modalGoal.classList.add('active');
    }

    function hideModalGoal() {
        overlay.classList.remove('active');
        modalGoal.classList.remove('active');
    }
    addGoalBtn.addEventListener('click', () => {
        showModalGoal();
    });

    overlay.addEventListener('click', (event) => {
        if (event.target == overlay || event.target == modalCloseBtn) {
            hideModalGoal();
        }
    });
    modalCloseBtn.forEach((item) => {
        item.addEventListener('click', () => {
            hideModalGoal();
        })
    });

    modalGoal.addEventListener('submit', () => {
        if (modalInputSum.value && modalInputDate.value && modalInputName) {
            const newGoal = document.createElement('div');
            newGoal.classList.add('goals__card');
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
            goalsContainer.append(newGoal);
            modalInputSum.value = '';
            modalInputDate.value = '';
            modalInputName.value = '';
            hideModalGoal();
        }
    });
});