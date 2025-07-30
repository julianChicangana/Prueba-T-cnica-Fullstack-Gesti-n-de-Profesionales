from sqlalchemy.orm import Session
from models import Profesional
from schemas import ProfesionalCreate


def obtener_profesionales(db: Session):
    return db.query(Profesional).all()

def crear_profesional(db: Session, profesional: ProfesionalCreate):
    db_prof = Profesional(**profesional.dict())
    db.add(db_prof)
    db.commit()
    db.refresh(db_prof)
    return db_prof

def eliminar_profesional(db: Session, profesional_id: int):
    profesional = db.query(Profesional).filter(Profesional.id_persona == profesional_id).first()
    if profesional:
        db.delete(profesional)
        db.commit()
    return profesional

def crear_profesional(db: Session, profesional: ProfesionalCreate):
    #verificar si ya existe el email
    existente = db.query(Profesional).filter_by(email=profesional.email).first()
    if existente:
        raise ValueError("YA EXISTE UN PROFESIONAL CON ESE EMAIL")
    
    
    db_prof = Profesional(**profesional.dict())
    db.add(db_prof)
    db.commit()
    db.refresh(db_prof)
    return db_prof

def actualizar_profesional(db: Session, profesional_id: int, profesional: ProfesionalCreate):
    db_prof = db.query(Profesional).filter(Profesional.id_persona == profesional_id).first()
    if not db_prof:
        return None
    for key, value in profesional.dict().items():
        setattr(db_prof, key, value)
    db.commit()
    db.refresh(db_prof)
    return db_prof
