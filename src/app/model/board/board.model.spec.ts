import {Card, CardInterface} from '../card/card.model';
import {List, ListInterface} from '../list/list.model';


describe('List Interface Test Cases' , () => {

  xit('must create', () => {
    const list = new List();
    expect(list).toBeTruthy();
  });
  xit('must contain a list of cards', () => {

    const c = new Card('', '', '', '');
    const c1 = new Card('', '', '', '');

    const cards: CardInterface[] = [];
    cards.push(c);
    cards.push(c1);
    const list: ListInterface = new List();
    list.cards = cards;
    expect(list).toBeTruthy();
    expect(list.cards).toBeTruthy();
    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(2);
  });
  xit('must constain a unique id', () => {
    const list = new List();
    list.id = '1';
    expect(list).toBeTruthy();
    expect(list.id).toBeTruthy();
  });


  xit('must allow addition of card', () => {
    const list = new List();
    expect(list).toBeTruthy();
    expect(list.cards).toBeFalsy();

    const card: CardInterface = new Card('1', 'header', '', '');
    list.addCard(card);
    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(1);
    expect(list.cards[0]).toEqual(card);

    const card2: CardInterface = new Card('1', 'header', '', '');
    list.addCard(card2);

    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(2);
    expect(list.cards[0]).toEqual(card);
    expect(list.cards[1]).toEqual(card2);

  });


  xit('must allow removal of card by id', () => {

    const cards: CardInterface[] = [];
    cards.push(new Card('1', 'header', '', ''));
    cards.push(new Card('2', 'header', '', ''));
    cards.push(new Card('3', 'header', '', ''));
    cards.push(new Card('4', 'header', '', ''));

    const list = new List();
    list.cards = cards;
    expect(list).toBeTruthy();
    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(4);

    const removedCard = list.removeCard('2');
    expect(removedCard).toBeTruthy();
    expect(removedCard.id).toBeTruthy();
    expect(removedCard.id).toEqual('2');

    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(3);
    expect(list.cards[0].id).toEqual('1');
    expect(list.cards[1].id).toEqual('3');

  });

  xit('must not give error when removing empty list', () => {

    const list = new List();
    expect(list).toBeTruthy();
    expect(list.cards).toBeFalsy();

    const removedCard = list.removeCard('2');
    expect(removedCard).toBeFalsy();

  });

  xit('must not give error when removing a card not existing', () => {

    const cards: CardInterface[] = [];
    cards.push(new Card('1', 'header', '', ''));
    cards.push(new Card('2', 'header', '', ''));
    cards.push(new Card('3', 'header', '', ''));
    cards.push(new Card('4', 'header', '', ''));

    const list = new List();
    list.cards = cards;
    expect(list).toBeTruthy();
    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(4);

    const removeNotExistentCard = list.removeCard('7');
    expect(removeNotExistentCard).toBeFalsy();


    const removeExistingCard = list.removeCard('3');

    expect(list.cards).toBeTruthy();
    expect(list.cards.length).toEqual(3);
    expect(removeExistingCard).toBeTruthy();
    expect(removeExistingCard.id).toBeTruthy();
    expect(removeExistingCard.id).toEqual('3');

  });



});


