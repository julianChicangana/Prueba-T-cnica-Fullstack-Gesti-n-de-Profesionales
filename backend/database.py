from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

#conexion a la base da datos
DATABASE_URL = "postgresql://postgres:seven@localhost:5432/profesionales"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(bind=engine)

Base = declarative_base()


# test_db.py
from sqlalchemy import create_engine

DATABASE_URL = "postgresql://postgres:seven@localhost:5432/profesionales"
engine = create_engine(DATABASE_URL)

try:
    with engine.connect() as conn:
        print("CONEXION A LA BASE DE DATOS FUE EXITOSA")
except Exception as e:
    print("ERROR DE CONEXION: ", e)

