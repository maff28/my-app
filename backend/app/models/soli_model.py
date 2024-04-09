from pydantic import BaseModel

class Solicitud(BaseModel):
    idSolicitud:int
    idUsuario:int
    IdTipoSolicitud:int
    PersonaAsignada:int
    Archivos:str
    Asunto:str
    nota:str
    FechaCreacion:str
    FechaUltimaModificacion:str
    estado:str
    prioridad:str