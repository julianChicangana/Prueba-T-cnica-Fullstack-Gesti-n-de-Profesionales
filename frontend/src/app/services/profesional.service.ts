import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesional } from '../models/profesional.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {
  private apiUrl = 'http://localhost:8000/profesionales'; // Asegúrate que esta URL coincide con tu backend

  constructor(private http: HttpClient) {}

  getProfesionales(): Observable<Profesional[]> {
    return this.http.get<Profesional[]>(this.apiUrl);
  }

  getProfesional(id: number): Observable<Profesional> {
    return this.http.get<Profesional>(`${this.apiUrl}/${id}`);
  }

  crearProfesional(profesional: Profesional): Observable<Profesional> {
    return this.http.post<Profesional>(this.apiUrl, profesional);
  }

  actualizarProfesional(id: number, profesional: Profesional): Observable<Profesional> {
    return this.http.put<Profesional>(`${this.apiUrl}/${id}`, profesional);
  }

  eliminarProfesional(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
