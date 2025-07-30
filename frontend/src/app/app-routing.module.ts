import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarProfesionalesComponent } from './components/listar-profesional/listar-profesional.component';
import { CrearProfesionalComponent } from './components/crear-profesional/crear-profesional.component';
import { EditarProfesionalComponent } from './components/editar-profesional/editar-profesional.component';

const routes: Routes = [
  { path: '', component: ListarProfesionalesComponent },
  { path: 'editar/:id_persona', component: EditarProfesionalComponent },
  { path: 'crear', component: CrearProfesionalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

