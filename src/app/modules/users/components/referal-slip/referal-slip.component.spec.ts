import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalSlipComponent } from './referal-slip.component';

describe('ReferalSlipComponent', () => {
  let component: ReferalSlipComponent;
  let fixture: ComponentFixture<ReferalSlipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferalSlipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
