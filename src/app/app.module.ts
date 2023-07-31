import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntradasComponent } from './entradas/entradas.component';
import { PlatoFuerteComponent } from './plato-fuerte/plato-fuerte.component';
import { PostresComponent } from './postres/postres.component';
import { BebidasComponent } from './bebidas/bebidas.component';

@NgModule({
  declarations: [
    AppComponent,
    EntradasComponent,
    PlatoFuerteComponent,
    PostresComponent,
    BebidasComponent
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
