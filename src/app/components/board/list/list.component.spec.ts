import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

import {SummaryComponent} from '../card/summary/summary.component';
import {Card} from '../../../model/card/card.model';
import {List} from '../../../model/list/list.model';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let nativeElement: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent , SummaryComponent],
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
      component.list.cards = [new Card('1', 'Header', 'Summary', 'This is a description')];
      fixture.detectChanges();
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

  xit('heading should be editable on click', () => {
  });

  it('should call method clickedOutside on click event', () => {

    const spyComponent = spyOn(component, 'clickedOutside');
    document.dispatchEvent(new Event('click'));
    expect(spyComponent).toHaveBeenCalledTimes(1);

  });

  it('should NOT call method clickedOutside when click event is on title', () => {
    // component heading is true
    component.headingEditMode = true;
    fixture.detectChanges();

    fixture.nativeElement.querySelector('input').dispatchEvent(new Event('click'));

    const spyComponent = spyOn(component, 'clickedOutside');
    expect(spyComponent).not.toHaveBeenCalled();

  });




});
