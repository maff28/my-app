import mysql.connector
from fastapi import HTTPException
from config.db_config import get_db_connection

from models.soli_model import Creasoli
from fastapi.encoders import jsonable_encoder
import uuid

class solicitudController:
    #FUNCION PARA CREAR SOLICITUD
    def create_Solicitud(self, solicitud:Creasoli):   
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            # Prepare the SQL INSERT query with only essential fields
            

            cursor.execute("INSERT INTO solicitud (idUsuario, IdTipoSolicitud, Asunto) VALUES (%s, %s, %s)", (solicitud.idUsuario, solicitud.IdTipoSolicitud, solicitud.Asunto))
            # Commit your changes
            conn.commit()
            
            # Get the number of rows affected
            
            
            cursor.close()
        
        except mysql.connector.Error as error:
            print("Failed to insert record into solicitud table {}".format(error))
            
        finally:
            if conn.is_connected():
                conn.close()
                print("MySQL connection is closed")

    
    
    
    
    #FUNCION PARA OBTENER SOLICITUDES PENDIENTES  POR ID PERSONA ASIGNADA
    def get_SolicitudesPendientesPorIdPersonaAsignada(self, idpersonaAsignada: int):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            # Modify the query to filter by 'estado' column with the value 'finalizada' and 'idPersonaAsignada' with the provided ID
            cursor.execute("SELECT sol.*, usua.nombre, asig.NombreAsignado,tp.valor FROM solicitud sol join usuario usua on sol.idUsuario = usua.id join asignaciones asig on sol.idSolicitud = asig.IdSoliciudA join tiposolicitud tp on sol.IdTipoSolicitud = tp.IDTipoSolicitud WHERE sol.estado = %s AND asig.IdAsignado = %s ", ('pendiente',idpersonaAsignada))
            results = cursor.fetchall()
            payload = []
            
            for result in results:
                content = {
                    'idSolicitud': int(result[0]),
                    'idUsuario': int(result[1]),
                    'IdTipoSolicitud': int(result[2]),
                    'idpersonaAsignada': int(result[3]), # Assuming this should be a string
                    'Archivos': result[4],
                    'Asunto': result[5],
                    'nota': result[6],
                    'FechaCreacion': result[7],
                    'FechaUltimaModificacion': result[8],
                    'estado': result[9],
                    'prioridad': result[10],
                    'nombre': result[11],
                    'NombreAsignado': result[12],
                    'valor': result[13]
                }
                payload.append(content)
                content = {}
            json_data = jsonable_encoder(payload)            
            return json_data
        except mysql.connector.Error as err:
            conn.rollback()
            print(f"Database error: {err}") # Log the error for debugging
        finally:
            conn.close()
    #FUNCION PARA OBTENER SOLICITUDES FINALIZADAS POR ID PERSONA  ASIGNADA
    def get_SolicitudesFinalizadasPorIdPersonaAsignada(self, idpersonaAsignada: int):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            # Modify the query to filter by 'estado' column with the value 'finalizada' and 'idPersonaAsignada' with the provided ID
            cursor.execute("SELECT sol.*, usua.nombre, asig.NombreAsignado,tp.valor FROM solicitud sol join usuario usua on sol.idUsuario = usua.id join asignaciones asig on sol.idSolicitud = asig.IdSoliciudA join tiposolicitud tp on sol.IdTipoSolicitud = tp.IDTipoSolicitud WHERE sol.estado = %s AND asig.IdAsignado = %s ", ('finalizada',idpersonaAsignada))
            results = cursor.fetchall()
            payload = []
            
            for result in results:
                content = {
                    'idSolicitud': int(result[0]),
                    'idUsuario': int(result[1]),
                    'IdTipoSolicitud': int(result[2]),
                    'idpersonaAsignada': int(result[3]), # Assuming this should be a string
                    'Archivos': result[4],
                    'Asunto': result[5],
                    'nota': result[6],
                    'FechaCreacion': result[7],
                    'FechaUltimaModificacion': result[8],
                    'estado': result[9],
                    'prioridad': result[10],
                    'nombre': result[11],
                    'NombreAsignado': result[12],
                    'valor': result[13]
                }
                payload.append(content)
            
            json_data = jsonable_encoder(payload)            
            return json_data
                    
        except mysql.connector.Error as err:
            conn.rollback()
            print(f"Database error: {err}") # Log the error for debugging
        finally:
            conn.close()
    
    
    #FUNCION PARA OBTENER SOLICITUDES CON ESTADO "PENDIENTE" Y POR ID DE USUARIO
    def get_SolicitudesPendientesPorIdUsuario(self, idUsuario: int):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
                # Modify the query to filter by 'estado' column with the value 'finalizada' and 'idUsuario' with the provided student ID
            cursor.execute("SELECT sol.*, usua.nombre, asig.NombreAsignado,tp.valor FROM solicitud sol join usuario usua on sol.idUsuario = usua.id join asignaciones asig on sol.idSolicitud = asig.IdSoliciudA join tiposolicitud tp on sol.IdTipoSolicitud = tp.IDTipoSolicitud WHERE sol.estado <> %s AND asig.IdAsignado = sol.idpersonaAsignada AND usua.id = %s ", ('finalizada',idUsuario))
            results = cursor.fetchall()
            payload = []
                
            for result in results:
                content = {
                    'idSolicitud': int(result[0]),
                    'idUsuario': int(result[1]),
                    'IdTipoSolicitud': int(result[2]),
                    'idpersonaAsignada': int(result[3]), # Assuming this should be a string
                    'Archivos': result[4],
                    'Asunto': result[5],
                    'nota': result[6],
                    'FechaCreacion': result[7],
                    'FechaUltimaModificacion': result[8],
                    'estado': result[9],
                    'prioridad': result[10],
                    'nombre': result[11],
                    'NombreAsignado': result[12],
                    'valor': result[13]
                }
                payload.append(content)
                
            json_data = jsonable_encoder(payload)            
            return json_data
        
        except mysql.connector.Error as err:
            conn.rollback()
            print(f"Database error: {err}") # Log the error for debugging
        finally:
            conn.close()
    #FUNCION PARA OBTENER TODAS LAS SOLICITUDES FINALIZADAS
    def get_SolicitudesFinalizadas(self):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
                # Modify the query to filter by 'estado' column with the value 'finalizada' and 'idUsuario' with the provided student ID
            cursor.execute("SELECT sol.*, usua.nombre, asig.NombreAsignado,tp.valor FROM solicitud sol join usuario usua on sol.idUsuario = usua.id join asignaciones asig on sol.idSolicitud = asig.IdSoliciudA join tiposolicitud tp on sol.IdTipoSolicitud = tp.IDTipoSolicitud WHERE sol.estado like '%finalizada%' ")
            results = cursor.fetchall()
            payload = []
                
            for result in results:
                content = {
                    'idSolicitud': int(result[0]),
                    'idUsuario': int(result[1]),
                    'IdTipoSolicitud': int(result[2]),
                    'idpersonaAsignada': int(result[3]), # Assuming this should be a string
                    'Archivos': result[4],
                    'Asunto': result[5],
                    'nota': result[6],
                    'FechaCreacion': result[7],
                    'FechaUltimaModificacion': result[8],
                    'estado': result[9],
                    'prioridad': result[10],
                    'nombre': result[11],
                    'NombreAsignado': result[12],
                    'valor': result[13]
                }
                payload.append(content)
                
            json_data = jsonable_encoder(payload)            
            return {"resultado": json_data}
        except mysql.connector.Error as err:
            conn.rollback()
            print(f"Database error: {err}") # Log the error for debugging
        finally:
            conn.close()
    #FUNCION PARA OBTENER TODAS LAS SOLICITUDES FINALIZADAS POR ID DEL USUARIO
    def get_SolicitudesFinalizadasPorIdUsuario(self, idUsuario: int):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
                # Modify the query to filter by 'estado' column with the value 'finalizada' and 'idUsuario' with the provided student ID
            cursor.execute("SELECT sol.*, usua.nombre, asig.NombreAsignado,tp.valor FROM solicitud sol join usuario usua on sol.idUsuario = usua.id join asignaciones asig on sol.idSolicitud = asig.IdSoliciudA join tiposolicitud tp on sol.IdTipoSolicitud = tp.IDTipoSolicitud WHERE sol.estado = %s AND asig.IdAsignado = sol.idpersonaAsignada AND usua.id = %s ", ('finalizada',idUsuario))
            results = cursor.fetchall()
            payload = []
                
            for result in results:
                content = {
                    'idSolicitud': int(result[0]),
                    'idUsuario': int(result[1]),
                    'IdTipoSolicitud': int(result[2]),
                    'idpersonaAsignada': int(result[3]), # Assuming this should be a string
                    'Archivos': result[4],
                    'Asunto': result[5],
                    'nota': result[6],
                    'FechaCreacion': result[7],
                    'FechaUltimaModificacion': result[8],
                    'estado': result[9],
                    'prioridad': result[10],
                    'nombre': result[11],
                    'NombreAsignado': result[12],
                    'valor': result[13]
                }
                payload.append(content)
                
            json_data = jsonable_encoder(payload)            
            return json_data
        except mysql.connector.Error as err:
            conn.rollback()
            print(f"Database error: {err}") # Log the error for debugging
        finally:
            conn.close()
    #FUNCION PARA OBTENER TODAS LAS SOLICITUDES CON ESTADO "PENDIENTE"
    def get_SolicitudesPendientes(self):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            # Modify the query to filter by 'estado' column with the value 'pendiente'
            cursor.execute("SELECT sol.*, usua.nombre, asig.NombreAsignado,tp.valor FROM solicitud sol join usuario usua on sol.idUsuario = usua.id join asignaciones asig on sol.idSolicitud = asig.IdSoliciudA join tiposolicitud tp on sol.IdTipoSolicitud = tp.IDTipoSolicitud WHERE sol.estado like '%pendiente%' ")
            results = cursor.fetchall()
            payload = []
            
            for result in results:
                content = {
                    'idSolicitud': int(result[0]),
                    'idUsuario': int(result[1]),
                    'IdTipoSolicitud': int(result[2]),
                    'idpersonaAsignada': int(result[3]),
                    'Archivos': result[4],
                    'Asunto': result[5],
                    'nota': result[6],
                    'FechaCreacion': result[7],
                    'FechaUltimaModificacion': result[8],
                    'estado': result[9],
                    'prioridad': result[10],
                    'nombre': result[11],
                    'NombreAsignado': result[12],
                    'valor': result[13]
                }
                payload.append(content)
            
            json_data = jsonable_encoder(payload)            
            return {"resultado": json_data}
                
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()

    #FUNCION PARA OBTENER TODAS LAS SOLICITUDES CON ESTADO "SIN ASIGNAR"
    def get_SolicitudesSinAsignar(self):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            # Modify the query to filter by 'estado' column with the value 'sin asignar'
            cursor.execute(" SELECT sol.*, usua.nombre,tp.valor FROM solicitud sol join usuario usua on sol.idUsuario = usua.id join tiposolicitud tp on sol.IdTipoSolicitud = tp.IDTipoSolicitud WHERE sol.estado like '%sin asignar%' ")
            results = cursor.fetchall()
            payload = []
            print (results)
            for result in results:
                content = {
                    'idSolicitud': int(result[0]),
                    'idUsuario': int(result[1]),
                    'IdTipoSolicitud': int(result[2]),
                    'idpersonaAsignada': int(result[3]),
                    'Archivos': result[4],
                    'Asunto': result[5],
                    'nota': result[6],
                    'FechaCreacion': result[7],
                    'FechaUltimaModificacion': result[8],
                    'estado': result[9],
                    'prioridad': result[10],
                    'nombre': result[11],
                    'valor': result[12]
                }
                payload.append(content)
                content = {}
            json_data = jsonable_encoder(payload)            
            return {"resultado": json_data}
                    
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
                "idpersonaAsignada": int(result[3]),
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
                    "idpersonaAsignada": data[3],
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
