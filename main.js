const $cardList = document.getElementById('card-list');

let canPlay = true;
let clickDelay = 800;
let extraDelay = 0;

document.onclick = (e) => {
  if(!canPlay) return;

  if(e.target.classList.contains("card") || e.target.parentNode.classList.contains("card")) {
    if (!this.lastClick || new Date().getTime() > (clickDelay + extraDelay + this.lastClick)) {
      extraDelay = 0;
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
      case "shuffle":
        extraDelay = 500;
        setTimeout(() => {
          let cards = [...document.getElementsByClassName('card')];
          cards.forEach(c => { c.dataset.fix = true; c.dataset.flip = false });
          setTimeout(() => {
            let clones = cards.map(c => c.cloneNode(true));
            clones.sort(_ => Math.round(-Math.random()));
            
            $cardList.innerHTML = '';
            clones.forEach(card => $cardList.appendChild(card));
            setTimeout(_ => clones.forEach(c => c.dataset.fix = false), 100);
          }, 400);
        }, 800);
        break;
      default:
        break;
    }
  }
}

// relatively dumb but workable randomization
let card_list = [
  Card.Win.toNode(),
  Card.Lose.toNode(),
  Card.Normal.toNode(),
  Card.Normal.toNode(),
  Card.Normal.toNode(),
  Card.Normal.toNode(),
  Card.Shuffle.toNode(),
  Card.Shuffle.toNode(),
  Card.Shuffle.toNode()
];
card_list.sort(_ => Math.round(-Math.random()));
card_list.forEach(card => $cardList.appendChild(card));

setTimeout(_ => {
  [...document.getElementsByClassName('card')].forEach(c => c.dataset.fix = false);
}, 1);