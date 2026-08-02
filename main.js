const $cardList = document.getElementById('card-list');

let canPlay = true;
let clickDelay = 1000;

document.onclick = (e) => {
  if(!canPlay) return;

  if(e.target.classList.contains("card") || e.target.parentNode.classList.contains("card")) {
    if (!this.lastClick || new Date().getTime() > (clickDelay + this.lastClick)) {
      this.lastClick = new Date().getTime();
      cardClick(e.target);
    }
  }
}

function cardClick(card) {
  const isFlipped = card.dataset.flip === 'true';
  const cardValue = card.dataset.value;

  if(!isFlipped) {
    card.dataset.flip = true;
    
    // only 2 cards lol
    canPlay = false;

    if(cardValue == 'win') {
      setTimeout(() => {
        alert("GANHOU!!!");
      }, 500);
    }
  }
}

// ultra basic randomization
if(Math.random() >= 0.5) {
  $cardList.appendChild(Card.Win.toNode());
  $cardList.appendChild(Card.Lose.toNode());
}
else {
  $cardList.appendChild(Card.Lose.toNode());
  $cardList.appendChild(Card.Win.toNode());
}