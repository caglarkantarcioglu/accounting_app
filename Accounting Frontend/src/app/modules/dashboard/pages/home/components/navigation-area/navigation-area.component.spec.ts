import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationAreaComponent } from './navigation-area.component';

describe('NavigationAreaComponent', () => {
  let component: NavigationAreaComponent;
  let fixture: ComponentFixture<NavigationAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
