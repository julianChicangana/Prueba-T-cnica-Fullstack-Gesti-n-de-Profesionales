####Prueba Técnica Fullstack: Gestión de Profesionales
(Python, Angular, PostgreSQL)

La idea es desarrollar una aplicación CRUD completa con funcionalidad de filtrado utilizando
Python (con Fast API), Angular y PostgreSQL.
Objetivo
Desarrollar una aplicación que permita gestionar una lista de profesionales.


####BASE DE DATOS: 

la base de datos fue realizada utilizando Postgres con los siguientes campos:
```bash
○ id (SERIAL PRIMARY KEY)
○ nombre (VARCHAR)
○ apellido (VARCHAR)
○ especialidad (VARCHAR)
○ email (VARCHAR, UNIQUE)
○ telefono (VARCHAR, opcional)

-----------------------------------------

create database profesionales;

-----------------------------------------
create table profesional (
  id_persona serial primary key,
  nombre varchar(100) not null,
  apellido varchar(100) not null,
  especialidad varchar(100) not null,
  email varchar(100) unique not null,
  telefono varchar(100) not null
)
```

