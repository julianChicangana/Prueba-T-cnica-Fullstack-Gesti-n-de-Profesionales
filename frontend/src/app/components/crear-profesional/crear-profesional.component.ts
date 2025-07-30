import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ProfesionalService } from '../../services/profesional.service';
import { Profesional } from '../../models/profesional.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-crear-profesional',
  templateUrl: './crear-profesional.component.html',
  styleUrls: ['./crear-profesional.component.css']
})
export class CrearProfesionalComponent {
  profesional: Profesional = { nombre: '', apellido: '', especialidad: '', email: '', telefono: '' };

  constructor(
    private profesionalService: ProfesionalService,
    private router: Router
  ) {}

  guardar(): void {
    if (
      !this.profesional.nombre ||
      !this.profesional.apellido ||
      !this.profesional.especialidad ||
      !this.profesional.email ||
      !this.profesional.telefono
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }
    this.profesionalService.crearProfesional(this.profesional).subscribe({
      next: () => {
        alert('Profesional creado exitosamente');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error(err);
        alert('Error creando profesional');
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
