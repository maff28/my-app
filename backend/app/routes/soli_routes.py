from fastapi import APIRouter, HTTPException
from controllers.soli_controller import *
from models.soli_model import Solicitud

router = APIRouter()

nuevo_soli = solicitudController()

@router.get("/get_Solicitudes/")
async def get_Solicitudes():
    rpta = nuevo_soli.get_Solicitudes()
    return rpta

@router.get("/get_Solicitud/{Solicitud_id}",response_model=Solicitud)
async def get_Solicitud(Solicitud_id: int):
    rpta = nuevo_soli.get_Solicitud(Solicitud_id)
    return rpta
