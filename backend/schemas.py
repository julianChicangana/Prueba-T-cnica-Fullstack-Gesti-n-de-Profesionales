from pydantic import BaseModel

class ProfesionalBase(BaseModel):
    nombre: str
    apellido: str
    especialidad: str
    email: str
    telefono: str

class ProfesionalCreate(ProfesionalBase):
    pass

class Profesional(ProfesionalBase):
    id_persona: int

    class Config:
        from_attributes = True 

