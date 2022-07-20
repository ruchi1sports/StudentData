import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportDropdownComponent } from './sport-dropdown.component';

describe('SportDropdownComponent', () => {
  let component: SportDropdownComponent;
  let fixture: ComponentFixture<SportDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
