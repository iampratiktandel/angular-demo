import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjOneComponent } from './rxj-one.component';

describe('RxjOneComponent', () => {
  let component: RxjOneComponent;
  let fixture: ComponentFixture<RxjOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
