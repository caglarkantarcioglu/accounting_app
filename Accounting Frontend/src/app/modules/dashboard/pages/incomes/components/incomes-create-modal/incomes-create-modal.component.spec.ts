import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesCreateModalComponent } from './incomes-create-modal.component';

describe('IncomesCreateModalComponent', () => {
  let component: IncomesCreateModalComponent;
  let fixture: ComponentFixture<IncomesCreateModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomesCreateModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
