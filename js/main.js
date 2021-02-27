const limitBar = document.querySelector('.cards__limit-bar'),
      limitSpent = document.querySelector('.cards__limit-value-spent'),
      limitTotal = document.querySelector('.cards__limit-value-total');

function limit () {
  let sum = limitBar.style.width = `${(limitSpent.textContent * 100)/ limitTotal.textContent}%`;
   
  return sum;
}

limit();

