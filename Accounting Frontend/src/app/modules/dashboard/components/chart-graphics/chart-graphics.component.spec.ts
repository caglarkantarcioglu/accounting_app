import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartGraphicsComponent } from './chart-graphics.component';

describe('ChartGraphicsComponent', () => {
  let component: ChartGraphicsComponent;
  let fixture: ComponentFixture<ChartGraphicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartGraphicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartGraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
