import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeuSlipsComponent } from './ceu-slips.component';

describe('CeuSlipsComponent', () => {
  let component: CeuSlipsComponent;
  let fixture: ComponentFixture<CeuSlipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeuSlipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CeuSlipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
