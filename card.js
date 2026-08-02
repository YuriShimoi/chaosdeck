class BaseCard {
  static value = "";
  static baseHtml = '<div class="card" data-value="${value}"><div class="content">${content}</div></div>';
  static contentHtml = "";

  static toHtml() {
    return this.baseHtml.replace('${value}', this.value).replace('${content}', this.contentHtml);
  }

  static toNode() {
    let temp_wrapper = document.createElement('DIV');
    temp_wrapper.innerHTML = this.toHtml();
    return temp_wrapper.firstChild;
  }
}

class WinCard extends BaseCard {
  static value = "win";
  static contentHtml = "<b>GANHOU!</b>";
}

class LoseCard extends BaseCard {
  static value = "lose";
  static contentHtml = "<b>PERDEU... :(</b>";
}

const Card = {
  Win: WinCard,
  Lose: LoseCard
};