import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneToOneSlipsComponent } from './one-to-one-slips.component';

describe('OneToOneSlipsComponent', () => {
  let component: OneToOneSlipsComponent;
  let fixture: ComponentFixture<OneToOneSlipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneToOneSlipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneToOneSlipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
