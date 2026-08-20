class BaseCard {
  static value = "";
  static baseHtml = '<div class="card" data-value="${value}" data-fix="true"><div class="content">${content}</div></div>';
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

class NormalCard extends BaseCard {
  static value = "normal";
  static contentHtml = "<b>TENTE AGAIN... :(</b>";
}

class ShuffleCard extends BaseCard {
  static value = "shuffle";
  static contentHtml = "<b>EMBARALHAR</b>";
}

class ColorCard extends BaseCard {
  static value = "color";
  static contentHtml = "<b>ATAQUE DE COR!</b>"
}

class EraseCard extends BaseCard {
  static value = "erase";
  static contentHtml = "<b>-2 CARTA</b>";
}

class SoundCard extends BaseCard {
  static value = "sound";
  static contentHtml = "<b>GUARANÁ!</b>";
}

const Card = {
  Win: WinCard,
  Lose: LoseCard,
  Normal: NormalCard,
  Shuffle: ShuffleCard,
  Color: ColorCard,
  Erase: EraseCard,
  Sound: SoundCard
};