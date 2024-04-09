import mysql.connector
from fastapi import HTTPException
from config.db_config import get_db_connection
from models.soli_model import Solicitud
from fastapi.encoders import jsonable_encoder

class solicitudController:
    def get_Solicitud(self, Solicitud_id: int):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM solicitud WHERE idSolicitud = %s", (Solicitud_id,))
            result = cursor.fetchone()
            payload = []
            content = {} 
            
            content={
                    'idSolicitud':int(result[0]),
                    'idUsuario':int(result[1]),
                    'IdTipoSolicitud':int(result[2]),
                    'PersonaAsignada':result[3],
                    'Archivos':result[4],
                    'Asunto':result[5],
                    'nota':result[6],
                    'Respuesta':result[7],
                    'FechaCreacion':result[8],
                    'FechaUltimaModificacion':result[9]
            }
            payload.append(content)
            
            json_data = jsonable_encoder(content)            
            if result:
               return  json_data
            else:
                raise HTTPException(status_code=404, detail="User not found")  
                
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()
    #TODAS LAS SOLICITUDES
    def get_Solicitudes(self):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM solicitud")
            result = cursor.fetchall()
            payload = []
            content = {} 
            for data in result:
                content={
                    'idSolicitud':data[0],
                    'idUsuario':data[1],
                    'IdTipoSolicitud':data[2],
                    'PersonaAsignada':data[3],
                    'Archivos':data[4],
                    'Asunto':data[5],
                    'nota':data[6],
                    'Respuesta':data[7],
                    'FechaCreacion':data[8],
                    'FechaUltimaModificacion':data[9]
                }
                payload.append(content)
                content = {}
            json_data = jsonable_encoder(payload)        
            if result:
               return {"resultado": json_data}
            else:
                raise HTTPException(status_code=404, detail="User not found")  
                
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()