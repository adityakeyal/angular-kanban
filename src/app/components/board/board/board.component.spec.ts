import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardComponent } from './board.component';
import {ListComponent} from '../list/list.component';
import {SummaryComponent} from '../card/summary/summary.component';
import {List} from '../../../model/list/list.model';
import {DebugElement} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardComponent, ListComponent, SummaryComponent ],
      imports: [FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render single list', () => {
    const list = new List ();
    list.name = 'List Name';
    component.lists = [list];
    fixture.detectChanges();
    expect(component).toBeTruthy();

    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;

    expect(bannerEl.querySelectorAll('app-list')).toBeTruthy();
    expect(bannerEl.querySelectorAll('app-list').length).toEqual(1);

    const myElement: Element = bannerEl.querySelectorAll('app-list').item(0);
    const x = myElement.querySelector('h1').textContent;
    expect(x).toContain('List Name');


  });
  it( 'should add list on call', () => {
    component.lists = [];
    expect(component.lists.length).toEqual( 0);
    component.addList('Name of List');
    expect(component.lists.length).toEqual( 1);
  });

  it('should call add list on click', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;

    spyOn(component, 'addList');

    expect(bannerEl.querySelector('h6.add-new-list')).toBeTruthy();

    const addNewListBanner: HTMLElement = bannerEl.querySelector('h6.add-new-list');
    addNewListBanner.click();
    // alternative: addNewListBanner.dispatchEvent(new Event('click'))
    expect(component.addList).toHaveBeenCalled();

  });

  it('list should be incremented', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;

    expect(bannerEl.querySelector('h6.add-new-list')).toBeTruthy();
    const addNewListBanner: HTMLElement = bannerEl.querySelector('h6.add-new-list');
    addNewListBanner.click();
    expect(component.lists.length).toEqual(1);

  });

});
