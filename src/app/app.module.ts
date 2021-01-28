import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routing
import { AppRoutingModule } from './app-routing.module';

// componentes generales
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { LateralbarComponent } from './lateralbar/lateralbar.component';

// modulos de la pagina
import { NoticiasModule } from './noticias/noticias.module';
import { AudiovisualesModule } from './audiovisuales/audiovisuales.module';
import { JuegosModule } from './juegos/juegos.module';
import { TorneosModule } from './torneos/torneos.module';
import { ForoModule } from './foro/foro.module';

// modulos extra
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    LateralbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoticiasModule,
    AudiovisualesModule,
    JuegosModule,
    TorneosModule,
    ForoModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
