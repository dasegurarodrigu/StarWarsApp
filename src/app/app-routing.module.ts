import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeliculasComponent } from './Vistas/peliculas/peliculas.component';
import { InfoComponent } from './Vistas/info/info.component';

const routes: Routes = [
  {path: '', redirectTo:'peliculas', pathMatch: 'full'},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'info/:id', component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
