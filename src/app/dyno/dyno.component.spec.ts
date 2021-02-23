import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynoComponent } from './dyno.component';

describe('DynoComponent', () => {
  let component: DynoComponent;
  let fixture: ComponentFixture<DynoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
