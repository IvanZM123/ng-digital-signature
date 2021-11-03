import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDigitalSignatureModule } from "ngx-digital-signature";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxDigitalSignatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
