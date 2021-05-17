import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesUpdateModalComponent } from './incomes-update-modal.component';

describe('ExpensesUpdateModalComponent', () => {
  let component: IncomesUpdateModalComponent;
  let fixture: ComponentFixture<IncomesUpdateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomesUpdateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesUpdateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
