from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import profesionales

app = FastAPI()

#CORS para permitir conexión con Angular
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  #se puedes restringir esto luego
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(profesionales.router)
