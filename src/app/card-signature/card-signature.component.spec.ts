import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSignatureComponent } from './card-signature.component';

describe('CardSignatureComponent', () => {
  let component: CardSignatureComponent;
  let fixture: ComponentFixture<CardSignatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSignatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
