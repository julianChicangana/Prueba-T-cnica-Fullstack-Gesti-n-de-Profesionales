import { Component, OnInit } from '@angular/core';
import { ProfesionalService } from '../../services/profesional.service';
import { Profesional } from '../../models/profesional.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-profesionales',
  templateUrl: './listar-profesionales.component.html',
  styleUrls: ['./listar-profesionales.component.css']
})
export class ListarProfesionalesComponent implements OnInit {
  profesionales: Profesional[] = [];

  constructor(
    private profesionalService: ProfesionalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerProfesionales();
  }

  obtenerProfesionales(): void {
    this.profesionalService.getProfesionales().subscribe({
      next: (data) => this.profesionales = data,
      error: (err) => console.error('Error al obtener profesionales:', err)
    });
  }

  editar(id: number): void {
    this.router.navigate(['/editar', id]);
  }

  eliminar(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este profesional?')) {
      this.profesionalService.eliminarProfesional(id).subscribe({
        next: () => {
          alert('Profesional eliminado');
          this.obtenerProfesionales();
        },
        error: (err) => console.error('Error al eliminar profesional:', err)
      });
    }
  }
}
