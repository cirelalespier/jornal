import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';

import { PrimeiroExemploComponent } from './primeiro-exemplo/primeiro-exemplo.component';
import { SegundoExemploComponent } from './segundo-exemplo/segundo-exemplo.component';
import { TerceiroExemploComponent } from './terceiro-exemplo/terceiro-exemplo.component';
import { NoticiaModule } from './noticia/noticia.module';


@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    
    PrimeiroExemploComponent,
    SegundoExemploComponent,
    TerceiroExemploComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoticiaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
