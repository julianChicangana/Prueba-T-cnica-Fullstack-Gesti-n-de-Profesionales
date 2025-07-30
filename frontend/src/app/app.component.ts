import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListarProfesionalesComponent } from './components/listar-profesional/listar-profesional.component';

@Component({
  standalone: true,
  imports: [RouterModule, ListarProfesionalesComponent],
  selector: 'app-root',
  template: `
    <h1 style="color: darkblue; text-align: center;">CRUD</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}



