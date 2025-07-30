import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { ProfesionalService } from '../../services/profesional.service';
import { Profesional } from '../../models/profesional.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-listar-profesionales',
  templateUrl: './listar-profesionales.component.html',
  styleUrls: ['./listar-profesional.component.css']
})
export class ListarProfesionalesComponent implements OnInit {
  profesionales: Profesional[] = [];
  filtro: string = '';

  constructor(
    private profesionalService: ProfesionalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.profesionalService.getProfesionales().subscribe(data => this.profesionales = data);
  }

  profesionalesFiltrados(): Profesional[] {
    return this.profesionales.filter(p =>
      p.nombre.toLowerCase().includes(this.filtro.toLowerCase()) ||
      p.especialidad.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }
  editar(id_persona: number): void {
    if (id_persona === undefined || id_persona === null) {
      console.error('ID no definido al intentar editar');
      return;
    }
    this.router.navigate(['/editar', id_persona]);
}

  eliminar(id_persona?: number): void {
    if (id_persona !== undefined && confirm('¿Eliminar profesional?')) {
      console.log('Eliminando ID:', id_persona); // <--- Agrega este log
      this.profesionalService.eliminarProfesional(id_persona).subscribe(() => {
        this.ngOnInit(); // recarga la lista
      });
  }
}
}
