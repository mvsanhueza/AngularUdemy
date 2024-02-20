import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button'
import { SharedModule } from './shared/shared.module';

// Configuración del local de la app
import localEsCL from '@angular/common/locales/es-CL';
import localFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsCL);
registerLocaleData(localFrCA);
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    SharedModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-CL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
