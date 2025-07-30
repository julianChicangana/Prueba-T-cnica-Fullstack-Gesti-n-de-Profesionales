import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  template: `
    <h1 style="color: darkblue; text-align: center;">CRUD</h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}



