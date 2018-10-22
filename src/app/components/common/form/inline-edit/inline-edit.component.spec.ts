import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditComponent } from './inline-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('InlineEditComponent', () => {
  let component: InlineEditComponent;
  let fixture: ComponentFixture<InlineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineEditComponent ],
      imports: [ FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should call method clickedOutside on click event', () => {

    const spyComponent = spyOn(component, 'clickedOutside');
    document.dispatchEvent(new Event('click'));
    expect(spyComponent).toHaveBeenCalledTimes(1);

  });

  it('should NOT call method clickedOutside when click event is on title', () => {
    // component heading is true
    component.isEditable = true;
    fixture.detectChanges();

    fixture.nativeElement.querySelector('input').dispatchEvent(new Event('click'));

    const spyComponent = spyOn(component, 'clickedOutside');
    expect(spyComponent).not.toHaveBeenCalled();

  });

  it('default class of inline if not provided', () => {

    const className = fixture.nativeElement.querySelector('h1').className;
    expect(className).toBeTruthy();
    expect(className).toEqual('inline');
  });

  it('default class of editable-inline if value not provided and when clicked', () => {
    component.isEditable = true;
    fixture.detectChanges();
    const className = fixture.nativeElement.querySelector('h1').className;
    expect(className).toBeTruthy();
    expect(className).toEqual('editable-inline');
  });

  it('class as per input provided', () => {

    component['editableClass'] = 'myclass';
    fixture.detectChanges();

    const className = fixture.nativeElement.querySelector('h1').className;
    expect(className).toBeTruthy();
    expect(className).toEqual('myclass');
  });

  it('class of editable-value when clicked', () => {
    component.isEditable = true;
    component['editableClass'] = 'myclass';
    fixture.detectChanges();
    const className = fixture.nativeElement.querySelector('h1').className;
    expect(className).toBeTruthy();
    expect(className).toEqual('editable-myclass');
  });

});
