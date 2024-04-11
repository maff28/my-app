from pydantic import BaseModel


class User(BaseModel):
    id:int
    IdArea: int
    usuario: str
    contrasena: str
    nombre: str
    apellido: str
    documento: str
    teléfono: str
    
#  modelo para el login 
class userdb(BaseModel):
   
    usuario: str
    contrasena:str

   