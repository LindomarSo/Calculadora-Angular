import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcalcComponent } from './appcalc.component';

describe('AppcalcComponent', () => {
  let component: AppcalcComponent;
  let fixture: ComponentFixture<AppcalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppcalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
