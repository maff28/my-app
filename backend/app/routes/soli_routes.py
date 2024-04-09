from fastapi import APIRouter, HTTPException
from controllers.soli_controller import *
from models.soli_model import Solicitud

router = APIRouter()

nuevo_soli = solicitudController()

@router.get("/get_Solicitudes/")
async def get_Solicitudes():
    rpta = nuevo_soli.get_Solicitudes()
    return rpta

@router.get("/get_SolicitudesFinalizadasPorEstudiante/{idUsuario}",response_model=list[Solicitud])
async def get_SolicitudesFinalizadasPorEstudiante(idUsuario:int):
    rpta = nuevo_soli.get_SolicitudesFinalizadasPorEstudiante(idUsuario)
    return rpta

@router.get("/get_SolicitudesSinAsignar/")
async def get_SolicitudesSinAsignar():
    rpta = nuevo_soli.get_SolicitudesSinAsignar()
    return rpta

@router.get("/get_SolicitudesPendientes/")
async def get_SolicitudesPendientes():
    rpta = nuevo_soli.get_SolicitudesPendientes()
    return rpta

@router.get("/get_Solicitud/{Solicitud_id}",response_model=Solicitud)
async def get_Solicitud(Solicitud_id: int):
    rpta = nuevo_soli.get_Solicitud(Solicitud_id)
    return rpta
