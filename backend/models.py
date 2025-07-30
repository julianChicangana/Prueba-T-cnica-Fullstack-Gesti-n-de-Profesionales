from sqlalchemy import Column, Integer, String
from database import Base


class Profesional(Base):
    __tablename__ = "profesional"

    id_persona = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, nullable=False)
    apellido = Column(String, nullable=False)
    especialidad = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    telefono = Column(String, nullable=False)
