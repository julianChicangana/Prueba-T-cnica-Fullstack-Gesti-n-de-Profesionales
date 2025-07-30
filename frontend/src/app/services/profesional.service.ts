import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesional } from '../models/profesional.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {
  private apiUrl = 'http://localhost:8000/profesionales';

  constructor(private http: HttpClient) {}

  getProfesionales(): Observable<Profesional[]> {
    return this.http.get<Profesional[]>(this.apiUrl);
  }

  crearProfesional(profesional: Profesional): Observable<Profesional> {
    return this.http.post<Profesional>(this.apiUrl, profesional);
  }

  getProfesional(id_persona: number): Observable<Profesional> {
    return this.http.get<Profesional>(`${this.apiUrl}/${id_persona}`);
  }

  actualizarProfesional(id_persona: number, profesional: Profesional): Observable<Profesional> {
    return this.http.put<Profesional>(`${this.apiUrl}/${id_persona}`, profesional);
  }

  eliminarProfesional(id_persona: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id_persona}`);
  }
}
