import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SummaryComponent } from './summary.component';
import {Card} from '../../../../model/card/card.model';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContentEditDirective } from 'src/app/directives/common/content-edit.directive';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryComponent ,
        ContentEditDirective ],
      imports: [ FormsModule, ReactiveFormsModule ]
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



  });



});
