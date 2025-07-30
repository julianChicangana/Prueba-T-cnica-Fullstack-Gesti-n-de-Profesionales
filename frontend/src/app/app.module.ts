import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CrearProfesionalComponent } from './components/crear-profesional/crear-profesional.component';
import { EditarProfesionalComponent } from './components/editar-profesional/editar-profesional.component';
import { ListarProfesionalesComponent } from './components/listar-profesional/listar-profesional.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProfesionalComponent,
    EditarProfesionalComponent,
    ListarProfesionalesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
