import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDigitalSignatureModule } from 'ngx-digital-signature';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxDigitalSignatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
