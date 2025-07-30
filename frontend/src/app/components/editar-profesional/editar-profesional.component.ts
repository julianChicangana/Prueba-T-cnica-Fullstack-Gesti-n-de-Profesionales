import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesionalService } from '../../services/profesional.service';
import { Profesional } from '../../models/profesional.model';

@Component({
  selector: 'app-editar-profesional',
  templateUrl: './editar-profesional.component.html',
  styleUrls: ['./editar-profesional.component.css']
})
export class EditarProfesionalComponent implements OnInit {
  profesional: Profesional = {
    nombre: '',
    apellido: '',
    especialidad: '',
    email: '',
    telefono: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profesionalService: ProfesionalService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.profesionalService.getProfesional(id).subscribe((data) => {
      this.profesional = data;
    });
  }

  actualizar(): void {
    if (!this.profesional.id) return;

    this.profesionalService.actualizarProfesional(this.profesional.id, this.profesional).subscribe(() => {
      this.router.navigate(['/profesionales']);
    });
  }
}
