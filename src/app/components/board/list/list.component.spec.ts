import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import {Card} from '../../../model/card.model';
import {SummaryComponent} from '../card/summary/summary.component';

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
      component.cards = [new Card('', '', '', '')]
      fixture.detectChanges();
    });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
