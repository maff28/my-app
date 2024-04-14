from fastapi import APIRouter, HTTPException
from controllers.soli_controller import *
from models.soli_model import Solicitud
from models.soli_model import Creasoli

router = APIRouter()

nuevo_soli = solicitudController()

@router.post("/create_Solicitud/")
async def create_Solicitud(solicitud:Creasoli):
    rpta = nuevo_soli.create_Solicitud(solicitud)
    return rpta

@router.get("/get_SolicitudesPendientesPorIdPersonaAsignada/{idpersonaAsignada}")
async def get_SolicitudesPendientesPorIdPersonaAsignada(idpersonaAsignada:int):
    rpta=nuevo_soli.get_SolicitudesPendientesPorIdPersonaAsignada(idpersonaAsignada)
    return rpta

@router.get("/get_SolicitudesFinalizadasPorIdPersonaAsignada/{idpersonaAsignada}")
async def get_SolicitudesFinalizadasPorIdPersonaAsignada(idpersonaAsignada:int):
    rpta=nuevo_soli.get_SolicitudesFinalizadasPorIdPersonaAsignada(idpersonaAsignada)
    return rpta

@router.get("/get_SolicitudesPendientesPorIdUsuario/{idUsuario}",response_model=list[Solicitud])
async def get_SolicitudesPendientesPorIdUsuario(idUsuario:int):
    rpta =nuevo_soli.get_SolicitudesPendientesPorIdUsuario(idUsuario)
    return rpta

@router.get("/get_SolicitudesFinalizadas/")
async def get_SolicitudesFinalizadas():
    rpta = nuevo_soli.get_SolicitudesFinalizadas()
    return rpta

@router.get("/get_Solicitudes/")
async def get_Solicitudes():
    rpta = nuevo_soli.get_Solicitudes()
    return rpta

@router.get("/get_SolicitudesFinalizadasPorIdUsuario/{idUsuario}",response_model=list[Solicitud])
async def get_SolicitudesFinalizadasPorIdUsuario(idUsuario:int):
    rpta = nuevo_soli.get_SolicitudesFinalizadasPorIdUsuario(idUsuario)
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
