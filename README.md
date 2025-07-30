#### Prueba Técnica Fullstack: Gestión de Profesionales
(Python, Angular, PostgreSQL)

La idea es desarrollar una aplicación CRUD completa con funcionalidad de filtrado utilizando
Python (con Fast API), Angular y PostgreSQL.
Objetivo
Desarrollar una aplicación que permita gestionar una lista de profesionales.


### BASE DE DATOS: 

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

#### INSERTAR DATOS

```bash

INSERT INTO profesional (nombre, apellido, especialidad, email, telefono) VALUES
('Ana', 'Gómez', 'Cardiología', 'ana.gomez@example.com', '3001234567'),
('Luis', 'Martínez', 'Pediatría', 'luis.martinez@example.com', '3012345678'),
('María', 'López', 'Neurología', 'maria.lopez@example.com', '3023456789'),
('Jorge', 'Pérez', 'Dermatología', 'jorge.perez@example.com', '3034567890'),
('Laura', 'Ramírez', 'Ginecología', 'laura.ramirez@example.com', '3045678901'),
('Carlos', 'Torres', 'Oncología', 'carlos.torres@example.com', '3056789012'),
('Diana', 'Morales', 'Psiquiatría', 'diana.morales@example.com', '3067890123'),
('Fernando', 'Castillo', 'Oftalmología', 'fernando.castillo@example.com', '3078901234'),
('Patricia', 'Vargas', 'Reumatología', 'patricia.vargas@example.com', '3089012345'),
('Andrés', 'Herrera', 'Traumatología', 'andres.herrera@example.com', '3090123456');


```
#### API

en este caso se debe crear el entorno virual

```bash

python -m venv venv

```

realizamos la instalacion de las dependencias y procedemos a activar el entorno virtual

```bash
.\venv\Scripts\Activate.ps1

```

luego ejecutamos el servidos FastAPI 

```bash 

uvicorn main:app --reload

```

#### PARA EL FRONTEND

se debe estar en la carpeta del frontend 

```bash

cd frontend

```

#### ejecutamos

```bash

ng serve --open

````

#### CRUD ---> JULIAN ALEJANDRO CHICANGANA PALECHOR

