import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import {SummaryComponent} from '../card/summary/summary.component';
import {Card} from '../../../model/card/card.model';
import {List} from '../../../model/list/list.model';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContentEditDirective } from 'src/app/directives/common/content-edit.directive';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let nativeElement: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent , SummaryComponent,
        ContentEditDirective ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

    beforeEach(() => {
      fixture = TestBed.createComponent(ListComponent);
      component = fixture.componentInstance;
      nativeElement = fixture.nativeElement;

      component.list = new List();
      component.list.name = 'List Name';

      fixture.detectChanges();
      component.list.cards = [new Card('1', 'Header', 'Summary', 'This is a description')];
    });

  it('should create', () => {
     expect(component).toBeTruthy();
  });

  it('should have heading', () => {
    expect(component.list.name).toBeTruthy();
    expect(component.list.name).toEqual('List Name');
  });

  it('should have cards', () => {
    expect(component.list.cards).toBeTruthy();
    expect(component.list.cards.length).toEqual(1);

  });

  it('should have add card button', () => {
    const addNewCardText = nativeElement.querySelector('.add-new-card').innerHTML;
    expect(addNewCardText).toEqual('Add new item...');
  });

  xit('heading should be of type ', () => {
  });

});
