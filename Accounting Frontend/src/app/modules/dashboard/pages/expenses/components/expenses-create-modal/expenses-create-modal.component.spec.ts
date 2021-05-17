import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesCreateModalComponent } from './expenses-create-modal.component';

describe('ExpensesCreateModalComponent', () => {
  let component: ExpensesCreateModalComponent;
  let fixture: ComponentFixture<ExpensesCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpensesCreateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensesCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
