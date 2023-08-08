import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './component_contador/contador.component';
import { ContadorAutomaticoComponent } from './contador-automatico/contador-automatico.component';
import { ButtonRedComponent } from './button-red/button-red.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ContadorAutomaticoComponent,
    ButtonRedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
