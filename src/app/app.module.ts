import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './component_contador/contador.component';
import { ContadorAutomaticoComponent } from './contador-automatico/contador-automatico.component';
import { ButtonRedComponent } from './button-red/button-red.component';
import { ComponentImageComponent } from './component-image/component-image.component';
import { ComponentFormularioComponent } from './component-formulario/component-formulario.component';
import { ComponentBuclesComponent } from './component-bucles/component-bucles.component';
import { ComponentFormularioPlantillaComponent } from './component-formulario-plantilla/component-formulario-plantilla.component';

import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ContadorAutomaticoComponent,
    ButtonRedComponent,
    ComponentImageComponent,
    ComponentFormularioComponent,
    ComponentBuclesComponent,
    ComponentFormularioPlantillaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
