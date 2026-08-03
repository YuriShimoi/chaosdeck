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
    
    switch(cardValue) {
      case "lose":
        canPlay = false;
        setTimeout(() => {
          alert("PERDEU!!!");
        }, 500);
        break;
      case "win":
        canPlay = false;
        setTimeout(() => {
          alert("GANHOU!!!");
        }, 500);
        break;
      default:
        break;
    }
  }
}

// ultra basic dumb randomization
let dumbRandom = Math.random();
if(dumbRandom <= 0.167) {
  $cardList.appendChild(Card.Win.toNode());
  $cardList.appendChild(Card.Lose.toNode());
  $cardList.appendChild(Card.Normal.toNode());
}
else if(dumbRandom <= 0.333) {
  $cardList.appendChild(Card.Win.toNode());
  $cardList.appendChild(Card.Normal.toNode());
  $cardList.appendChild(Card.Lose.toNode());
}
else if(dumbRandom <= 0.5) {
  $cardList.appendChild(Card.Lose.toNode());
  $cardList.appendChild(Card.Win.toNode());
  $cardList.appendChild(Card.Normal.toNode());
}
else if(dumbRandom <= 0.666) {
  $cardList.appendChild(Card.Lose.toNode());
  $cardList.appendChild(Card.Normal.toNode());
  $cardList.appendChild(Card.Win.toNode());
}
else if(dumbRandom <= 0.833) {
  $cardList.appendChild(Card.Normal.toNode());
  $cardList.appendChild(Card.Win.toNode());
  $cardList.appendChild(Card.Lose.toNode());
}
else {
  $cardList.appendChild(Card.Normal.toNode());
  $cardList.appendChild(Card.Lose.toNode());
  $cardList.appendChild(Card.Win.toNode());
}