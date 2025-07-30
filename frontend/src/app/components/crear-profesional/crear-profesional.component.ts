import { Component } from '@angular/core';
import { ProfesionalService } from '../../services/profesional.service';
import { Profesional } from '../../models/profesional.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-profesional',
  templateUrl: './crear-profesional.component.html',
  styleUrls: ['./crear-profesional.component.css']
})
export class CrearProfesionalComponent {
    profesional: Profesional = {
    nombre: '',
    profesion: '',
    correo: ''
  };

  constructor(
    private profesionalService: ProfesionalService,
    private router: Router
  ) {}

  guardar(): void {
    if (!this.profesional.nombre || !this.profesional.profesion || !this.profesional.correo) {
      alert('Todos los campos son obligatorios');
      return;
    }

    this.profesionalService.crearProfesional(this.profesional).subscribe({
      next: () => {
        alert('Profesional creado exitosamente');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Error al crear profesional:', err);
        alert('Hubo un error al crear el profesional');
      }
    });
  }
}
