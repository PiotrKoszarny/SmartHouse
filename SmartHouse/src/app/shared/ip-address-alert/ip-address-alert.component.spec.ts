import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpAddressAlertComponent } from './ip-address-alert.component';

describe('IpAddressAlertComponent', () => {
  let component: IpAddressAlertComponent;
  let fixture: ComponentFixture<IpAddressAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpAddressAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpAddressAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
