import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; //solo conoces app.component.ts este no lleva extension .ts porque este archivo trabaja con .ts y pordefecto sabe que es un .ts 
//para utilizar mas componentes hay que importar 
import { Primero } from './primerComponente/primerComponente';
import { HolaComponent } from './hola/hola.component'; //sintaxis import { clase_del_componente } from 'ruta': ./ es dentro de la carpera 

@NgModule({ // es la aplicacion el modulo que esta echo por multiples coponentes 
  declarations: [
    AppComponent, //aqui se declara que componentes de la aplicacion de angular puede utilizar 
    Primero, HolaComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
