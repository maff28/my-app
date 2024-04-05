import mysql.connector
from fastapi import HTTPException
from config.db_config import get_db_connection
from models.user_model import User
from models.user_model import userdb
from fastapi.encoders import jsonable_encoder
import jwt

SECRET_KEY="cleandeskpolicy123$"
ALGORITHM="HS256"
ACCES_TOKEN_EXPIRE_MIN="400"
class UserController:    
            
    def create_user(self, user: User):   
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            print("prueba1")
            cursor.execute("INSERT INTO usuario (IdArea,usuario,contrasena,nombre,apellido,documento,teléfono) VALUES (%s, %s, %s, %s, %s, %s, %s)", (user.IdArea, user.usuario, user.contrasena, user.nombre, user.apellido, user.documento, user.teléfono))
            print("prueba2")
            conn.commit()
            conn.close()
            return {"resultado": "Usuario creado"}
        except mysql.connector.Error as err:
            print(err)
            conn.rollback()
        finally:
            conn.close()
    def loginuser(self,loginvar:userdb):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT id,IdArea,usuario,contrasena FROM usuario WHERE usuario=%s and contrasena=%s", (loginvar.usuario,loginvar.contrasena))
            result = cursor.fetchone()
            if result:
                content={
                    'id':result[0],
                    'IdArea':result[1],
                    'usuario':result[2],
                    'contrasena':result[3]
                }
                encoded = jwt.encode(content,SECRET_KEY,algorithm="HS256")
                
                return HTTPException(status_code=200,detail=f"{encoded}")
            else:
                return HTTPException(status_code=400,detail="email o contraseña incorrecto")
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            cursor.close()
            conn.close()

    def delete_user(self, user_id: int):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("DELETE FROM usuario WHERE id = %s", (user_id,))
            conn.commit()
            conn.close()
            return {"resultado": "Usuario eliminado"}
        except mysql.connector.Error as err:
            conn.rollback()
        finally:
            conn.close()
    
    def get_user(self, user_id: int):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM usuario WHERE id = %s", (user_id,))
            result = cursor.fetchone()
            payload = []
            content = {} 
            
            content={
                    'id':int(result[0]),
                    'IdArea':int(result[1]),
                    'usuario':result[2],
                    'contrasena':result[3],
                    'nombre':result[4],
                    'apellido':result[5],
                    'documento':result[6],
                    'teléfono':result[7]
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
           
    def get_users(self):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM usuario")
            result = cursor.fetchall()
            payload = []
            content = {} 
            for data in result:
                content={
                    'id':data[0],
                    'IdArea':data[1],
                    'usuario':data[2],
                    'contrasena':data[3],
                    'nombre':data[4],
                    'apellido':data[5],
                    'documento':data[6],
                    'teléfono':data[7]
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
    
    def update_user(self,user_id:int,user:User):
        try:
            conn = get_db_connection()
            cursor = conn.cursor()
            print("prueba1")
            cursor.execute(("""
                UPDATE usuario
                SET IdArea = %s, usuario = %s, contrasena = %s,
                    nombre = %s, apellido = %s, documento = %s, teléfono = %s
                WHERE id = %s
                """),(
                    user.IdArea, user.usuario, user.contrasena, user.nombre, user.apellido, user.documento, user.teléfono, user_id
                ))
            conn.commit()

            if cursor.rowcount == 0:
                raise HTTPException(status_code=404, detail="usuario no encontrado")

            # Fetch updated data and return
            cursor.execute(f"SELECT * FROM usuario WHERE id='{user_id}'")
            result = cursor.fetchone()
            content = {
                    'id':int(result[0]),
                    'IdArea':int(result[1]),
                    'usuario':result[2],
                    'contrasena':result[3],
                    'nombre':result[4],
                    'apellido':result[5],
                    'documento':result[6],
                    'teléfono':result[7]
                }
            return content

        except Exception as err:
            # Handle other potential exceptions appropriately
            raise HTTPException(status_code=500, detail=f"Error al actualizar el usuario : {err}")

        finally:
            conn.close()            