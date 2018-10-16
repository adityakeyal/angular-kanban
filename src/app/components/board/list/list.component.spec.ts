import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import {SummaryComponent} from '../card/summary/summary.component';
import {Card} from '../../../model/card/card.model';
import {List} from '../../../model/list/list.model';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent , SummaryComponent],
    })
    .compileComponents();
  }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ListComponent);
      component = fixture.componentInstance;
      component.list = new List();
      component.list.name = 'List Name';
      component.list.cards = [new Card('1', 'Header', 'Summary', 'This is a description')];
      fixture.detectChanges();
    });

  it('should create', () => {
     expect(component).toBeTruthy();
  });
});
