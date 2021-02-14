import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjThreeComponent } from './rxj-three.component';

describe('RxjThreeComponent', () => {
  let component: RxjThreeComponent;
  let fixture: ComponentFixture<RxjThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
