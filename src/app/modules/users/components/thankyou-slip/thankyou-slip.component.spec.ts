import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouSlipComponent } from './thankyou-slip.component';

describe('ThankyouSlipComponent', () => {
  let component: ThankyouSlipComponent;
  let fixture: ComponentFixture<ThankyouSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankyouSlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankyouSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
