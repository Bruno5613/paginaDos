import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradasComponent } from './entradas/entradas.component';
import { PlatoFuerteComponent } from './plato-fuerte/plato-fuerte.component';
import { combineLatest } from 'rxjs';
import { PostresComponent } from './postres/postres.component';
import { BebidasComponent } from './bebidas/bebidas.component';

const routes: Routes = [
  {
    path: 'entradas',
    component: EntradasComponent
  },
  {
    path: 'plato-fuerte',
    component: PlatoFuerteComponent
  },
  {
    path: 'postres',
    component: PostresComponent
  },
  {
    path: 'bebidas',
    component: BebidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
