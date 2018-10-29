import {Card, CardInterface} from '../card/card.model';

export interface ListInterface {
  id: string;
  name: string;
  position: number;
  cards: CardInterface[];

}


export class List implements ListInterface {

  cards: CardInterface[] = [];
  id: string;
  name: string;
  position: number;


  constructor() {
  }



  addCard(card: CardInterface) {
    if (this.isCardEmpty()) {
      this.cards = [];
    }
    this.cards.push(card);
  }

  removeCard(id: string): CardInterface {
    if (this.isCardEmpty()) {
      return null;
    }
    const cardIndex = this.cards.findIndex(x => x.id === id);
    if ( cardIndex > -1 ) {
      const cardInterfaces = this.cards.splice(cardIndex, 1);
      return cardInterfaces[0];
    }

    return null;

  }

  private isCardEmpty() {
    return this.cards === undefined || this.cards === null;
  }


}
