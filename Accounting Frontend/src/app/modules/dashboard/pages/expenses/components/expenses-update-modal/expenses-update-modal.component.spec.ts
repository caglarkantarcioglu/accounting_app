import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesUpdateModalComponent } from './expenses-update-modal.component';

describe('ExpensesUpdateModalComponent', () => {
  let component: ExpensesUpdateModalComponent;
  let fixture: ComponentFixture<ExpensesUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesUpdateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
