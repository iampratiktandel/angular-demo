import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalCdkComponent } from './portal-cdk.component';

describe('PortalCdkComponent', () => {
  let component: PortalCdkComponent;
  let fixture: ComponentFixture<PortalCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalCdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
