import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { ProfesionalService } from '../../services/profesional.service';
import { Profesional } from '../../models/profesional.model';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  selector: 'app-editar-profesional',
  templateUrl: './editar-profesional.component.html',
  styleUrls: ['./editar-profesional.component.css']
})
export class EditarProfesionalComponent implements OnInit {
  profesional: Profesional = { id_persona: 0,nombre: '', apellido: '', especialidad: '', email: '', telefono: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profesionalService: ProfesionalService
  ) {}

  ngOnInit(): void {
    const id_persona = Number(this.route.snapshot.paramMap.get('id_persona'));
    this.profesionalService.getProfesional(id_persona).subscribe(data => this.profesional = data);
  }

  actualizar(): void {
    if (!this.profesional.id_persona) return;
    this.profesionalService.actualizarProfesional(this.profesional.id_persona, this.profesional)
      .subscribe(() => {
        alert('Profesional actualizado');
        this.router.navigate(['/']);
      });
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
