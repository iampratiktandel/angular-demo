import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjTwoComponent } from './rxj-two.component';

describe('RxjTwoComponent', () => {
  let component: RxjTwoComponent;
  let fixture: ComponentFixture<RxjTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
