import mysql.connector
from fastapi import HTTPException
from config.db_config import get_db_connection
from models.soli_model import Solicitud
from fastapi.encoders import jsonable_encoder


class solicitudController:
    def get_SolicitudesFinalizadasPorEstudiante(self, idUsuario: int):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
                # Modify the query to filter by 'estado' column with the value 'finalizada' and 'idUsuario' with the provided student ID
            cursor.execute("SELECT * FROM solicitud WHERE estado = %s AND idUsuario = %s", ('finalizada', idUsuario))
            results = cursor.fetchall()
            payload = []
                
            for result in results:
                content = {
                    'idSolicitud': int(result[0]),
                    'idUsuario': int(result[1]),
                    'IdTipoSolicitud': int(result[2]),
                    'PersonaAsignada': int(result[3]), # Assuming this should be a string
                    'Archivos': result[4],
                    'Asunto': result[5],
                    'nota': result[6],
                    'FechaCreacion': result[7],
                    'FechaUltimaModificacion': result[8],
                    'estado': result[9],
                    'prioridad': result[10]
                }
                payload.append(content)
                
            json_data = jsonable_encoder(payload)            
            return json_data
                       
        except mysql.connector.Error as err:
            conn.rollback()
            print(f"Database error: {err}") # Log the error for debugging
        finally:
            conn.close()
    
    def get_SolicitudesPendientes(self):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            # Modify the query to filter by 'estado' column with the value 'pendiente'
            cursor.execute("SELECT * FROM solicitud WHERE estado = %s", ('pendiente',))
            results = cursor.fetchall()
            payload = []
            
            for result in results:
                content = {
                    'idSolicitud': int(result[0]),
                    'idUsuario': int(result[1]),
                    'IdTipoSolicitud': int(result[2]),
                    'PersonaAsignada': int(result[3]),
                    'Archivos': result[4],
                    'Asunto': result[5],
                    'nota': result[6],
                    'FechaCreacion': result[7],
                    'FechaUltimaModificacion': result[8],
                    'estado': result[9],
                    'prioridad': result[10]
                }
                payload.append(content)
            
            json_data = jsonable_encoder(payload)            
            return json_data
                
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()

    
    def get_SolicitudesSinAsignar(self):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            # Modify the query to filter by 'estado' column with the value 'sin asignar'
            cursor.execute("SELECT * FROM solicitud WHERE estado = %s", ('sin asignar',))
            results = cursor.fetchall()
            payload = []
        
            for result in results:
                content = {
                    'idSolicitud': int(result[0]),
                    'idUsuario': int(result[1]),
                    'IdTipoSolicitud': int(result[2]),
                    'PersonaAsignada': int(result[3]),
                    'Archivos': result[4],
                    'Asunto': result[5],
                    'nota': result[6],
                    'FechaCreacion': result[7],
                    'FechaUltimaModificacion': result[8],
                    'estado': result[9],
                    'prioridad': result[10]
                }
                payload.append(content)
            
            json_data = jsonable_encoder(payload)            
            return json_data
                    
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()
        
    def get_Solicitud(self, Solicitud_id: int):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute(
                "SELECT * FROM solicitud WHERE idSolicitud = %s", (Solicitud_id,)
            )
            result = cursor.fetchone()
            if result is None:
                raise HTTPException(status_code=404, detail="Solicitud not found")
            payload = []
            content = {}

            content = {
                "idSolicitud": int(result[0]),
                "idUsuario": int(result[1]),
                "IdTipoSolicitud": int(result[2]),
                "PersonaAsignada": int(result[3]),
                "Archivos": result[4],
                "Asunto": result[5],
                "nota": result[6],
                "FechaCreacion": result[7],
                "FechaUltimaModificacion": result[8],
                "estado": result[9],
                "prioridad": result[10]
            }
            payload.append(content)

            json_data = jsonable_encoder(content)
            if result:
                return json_data
            else:
                raise HTTPException(status_code=404, detail="User not found")

        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()

    # TODAS LAS SOLICITUDES
    def get_Solicitudes(self):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM solicitud")
            result = cursor.fetchall()
            payload = []
            content = {}
            for data in result:
                content = {
                    "idSolicitud": data[0],
                    "idUsuario": data[1],
                    "IdTipoSolicitud": data[2],
                    "PersonaAsignada": data[3],
                    "Archivos": data[4],
                    "Asunto": data[5],
                    "nota": data[6],
                    "FechaCreacion": data[7],
                    "FechaUltimaModificacion": data[8],
                    "estado":data[9],
                    "prioridad":data[10]
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
