from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.profesionales import router as profesionales_router  # ✅ IMPORT CORRECTO

app = FastAPI()

# CORS para que Angular pueda acceder
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # o "*"
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluimos las rutas
app.include_router(profesionales_router)
