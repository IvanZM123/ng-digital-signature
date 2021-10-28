import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxDigitalSignatureComponent } from './ngx-digital-signature.component';

@NgModule({
  declarations: [
    NgxDigitalSignatureComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NgxDigitalSignatureComponent
  ]
})
export class NgxDigitalSignatureModule {}
