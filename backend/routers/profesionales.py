from fastapi import APIRouter, Depends, HTTPException, Body
from sqlalchemy.orm import Session
from database import SessionLocal
from crud import (
    obtener_profesionales,
    crear_profesional,
    eliminar_profesional,
    actualizar_profesional
)
import models  # Asegúrate de tener models.Profesional
import schemas

router = APIRouter(prefix="/profesionales", tags=["profesionales"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Obtener todos
@router.get("/", response_model=list[schemas.Profesional])
def listar_profesionales(db: Session = Depends(get_db)):
    return obtener_profesionales(db)

# Obtener uno por ID
@router.get("/{id_persona}", response_model=schemas.Profesional)
def obtener_por_id(id_persona: int, db: Session = Depends(get_db)):
    profesional = db.query(models.Profesional).filter(models.Profesional.id_persona == id_persona).first()
    if not profesional:
        raise HTTPException(status_code=404, detail="PROFESIONAL NO ENCONTRADO")
    return profesional

# Crear
@router.post("/", response_model=schemas.Profesional)
def crear(
    profesional: schemas.ProfesionalCreate = Body(...),
    db: Session = Depends(get_db)
):
    return crear_profesional(db, profesional)

# Eliminar
@router.delete("/{id_persona}", response_model=dict)
def eliminar(id_persona: int, db: Session = Depends(get_db)):
    eliminado = eliminar_profesional(db, id_persona)
    if not eliminado:
        raise HTTPException(status_code=404, detail="PROFESIONAL NO ENCONTRADO")
    return {"mensaje": "PROFESIONAL ELIMINADO CORRECTAMENTE"}

# Actualizar
@router.put("/{id_persona}", response_model=schemas.Profesional)
def actualizar(id_persona: int, profesional: schemas.ProfesionalCreate, db: Session = Depends(get_db)):
    actualizado = actualizar_profesional(db, id_persona, profesional)
    if not actualizado:
        raise HTTPException(status_code=404, detail="PROFESIONAL NO ENCONTRADO")
    return actualizado
