from pydantic import BaseModel

class Solicitud(BaseModel):
    idSolicitud:int
    idUsuario:int
    IdTipoSolicitud:int
    PersonaAsignada:str
    Archivos:str
    Asunto:str
    nota:str
    Respuesta:str
    FechaCreacion:str
    FechaUltimaModificacion:str