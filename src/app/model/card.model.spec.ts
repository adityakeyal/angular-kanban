import {CardInterface, Card} from './card.model';

describe('BookModel', () => {

  it('Should be created' , () => {
    const card = new Card('id', 'header', 'summary', 'description');
    expect(card).toBeTruthy();
    expect(card.id).toEqual('id');
    expect(card.header).toEqual('header');
    expect(card.summary).toEqual('summary');
    expect(card.description).toEqual('description');
  });


});
