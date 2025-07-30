from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
from crud import obtener_profesionales, crear_profesional, eliminar_profesional, actualizar_profesional
import schemas
from fastapi import Body

router = APIRouter(prefix="/profesionales", tags=["profesionales"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=list[schemas.Profesional])
def listar_profesionales(db: Session = Depends(get_db)):
    return obtener_profesionales(db)

@router.post("/", response_model=schemas.Profesional)
def crear(
    profesional: schemas.ProfesionalCreate = Body(...),
    db: Session = Depends(get_db)
):
    return crear_profesional(db, profesional)

@router.delete("/{profesional_id}")
def eliminar(profesional_id: int, db: Session = Depends(get_db)):
    eliminado = eliminar_profesional(db, profesional_id)
    if not eliminado:
        raise HTTPException(status_code=404, detail="PROFESIONAL NO ENCONTRADO")
    return {"mensaje": "PROFESIONNAL ELIMINADO CORRECTAMENTE"}

@router.put("/{profesional_id}", response_model=schemas.Profesional)
def actualizar(profesional_id: int, profesional: schemas.ProfesionalCreate, db: Session = Depends(get_db)):
    actualizado = actualizar_profesional(db, profesional_id, profesional)
    if not actualizado:
        raise HTTPException(status_code=404, detail="PROFESIONAL NO ENCONTRADO")
    return actualizado