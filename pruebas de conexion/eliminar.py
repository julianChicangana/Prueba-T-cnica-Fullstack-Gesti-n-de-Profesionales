#importar modulo

import psycopg2


#coexion a la base de datos
conexion = psycopg2.connect(user='postgres',
                            password='seven',
                            host='localhost',
                            port='5432',
                            database='profesionales')

#crear cursor
cursor = conexion.cursor()

#sentencia sql
sql = "DELETE FROM PROFESIONAL WHERE id_persona = %s"

#solicitar el dato al usuario

id_persona = input("IGRESAR EL ID DE LA PERSONA A ELIMINAR: ")

#metodo execute

cursor.execute(sql, id_persona)

#guaradar los cambios
conexion.commit()

#contar registros eliminados
regitros_eliminados = cursor.rowcount

#mensaje al ususario
print(f"REGISTROS ELIMINADOS: {regitros_eliminados}")

#cerrar conexion
cursor.close()
conexion.close()
