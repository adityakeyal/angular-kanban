import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryComponent } from './summary.component';
import {Card} from '../../../../model/card/card.model';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    component.card = new Card('1', 'header', 'summary', 'description')
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have header', () => {
    expect(component).toBeTruthy();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4.card-title').textContent).toContain('header');
    expect(compiled.querySelector('h6').textContent).toContain('summary');
    expect(compiled.querySelector('p').textContent).toContain('description');


  });



});
