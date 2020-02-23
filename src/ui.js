export class DeckUI {
  constructor() {
      this.icon = { "hearts" : "&hearts;", "diamonds" : "&diams;", "spades" : "&spades;", "clubs" : "&clubs;" }
  }
  createCard(suit, rank) {
    let center = "";
    if (/^\d+$/.test(rank)) {
      for (let i = 1; i <= parseInt(rank); i++)
        center += `<span class="card-center-item ${suit}">${this.icon[suit]}</span>`;
    }
    else {
      center += `<span class="card-center-item ${suit} big-suit">${this.icon[suit]}</span>`;
    }
    return `
      <div class="card">
          <span class="card-side">
              <span>${rank}</span>
              <span class="${suit} small-suit">${this.icon[suit]}</span>
          </span>
          <span class="card-center ${suit}">${center}</span>
          <span class="card-side upside-down">
              <span>${rank}</span>
              <span class="${suit} small-suit">${this.icon[suit]}</span>
          </span>
          <div class="card-back" suit="${suit}" rank="${rank}"></div>
      </div>`
  }
}