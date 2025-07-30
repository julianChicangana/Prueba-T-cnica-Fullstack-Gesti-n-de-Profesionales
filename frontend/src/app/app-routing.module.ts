import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarProfesionalesComponent } from './components/listar-profesional/listar-profesional.component';
import { CrearProfesionalComponent } from './components/crear-profesional/crear-profesional.component';
import { EditarProfesionalComponent } from './components/editar-profesional/editar-profesional.component';

const routes: Routes = [
  { path: '', component: ListarProfesionalesComponent },
  { path: 'crear', component: CrearProfesionalComponent },
  { path: 'editar/:id', component: EditarProfesionalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

