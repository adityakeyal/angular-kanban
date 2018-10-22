import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InineEditComponent } from './inine-edit.component';

describe('InineEditComponent', () => {
  let component: InineEditComponent;
  let fixture: ComponentFixture<InineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
