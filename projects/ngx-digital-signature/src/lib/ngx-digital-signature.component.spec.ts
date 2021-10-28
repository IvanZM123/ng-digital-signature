import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDigitalSignatureComponent } from './ngx-digital-signature.component';

describe('NgxDigitalSignatureComponent', () => {
  let component: NgxDigitalSignatureComponent;
  let fixture: ComponentFixture<NgxDigitalSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxDigitalSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDigitalSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
