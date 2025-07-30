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
sql = "INSERT INTO profesional (nombre,apellido,especialidad,email,telefono) values(%s,%s,%s,%s,%s)"

#solicitar datos al usuario
nombre = input("INGRESE NOMBRE: ")
apellido = input("INGRESE APELLIDO: ")
especialidad = input("INGRESE ESPECIALIDAD: ")
email = input("INGRESE EMAIL: ")
telefono = input("INGRESE TELEFONO: ")

#recoleccion de datos
datos = (nombre, apellido, especialidad, email, telefono)

#usar el metodo execute 

cursor.execute(sql, datos)

#guardar los cambios

conexion.commit()

#registros insertados

registros = cursor.rowcount

#mostrar mensaje de exito

print(f'REGISTROS INSERTADOS: {registros}')

#cerrar cursor y conexion
cursor.close()
conexion.close()