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

#crear sentencia sql
sql = "UPDATE profesional SET nombre= %s, apellido= %s, especialidad= %s, email= %s, telefono= %s WHERE id_persona = %s"

#consulta de datos al usuario
id_persona = input("INGRESE ID DE LA PERSONA A ACTUALIZAR: ")
nombre = input("INGRESE NOMBRE: ")
apellido = input("INGRESE APELLIDO: ")
especialidad = input("INGRESE ESPECIALIDAD: ")
email = input("INGRESE EMAIL: ")
telefono = input("INGRESE TELEFONO: ")

#recoleccion de datos
datos = (nombre, apellido, especialidad, email, telefono, id_persona)

#usar el metodo execute
cursor.execute(sql, datos)

#guardar los cambios
conexion.commit()

#contar el numero de registros actualizados
actualizacion = cursor.rowcount

#mostrar el resultado
print(f"REGISTRO ACTUALIZADO: {actualizacion}")

#cerrar coonexion
cursor.close()

conexion