import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';   // <-- Importa esto
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,      // <-- Agrégalo aquí
    AppRoutingModule,
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
