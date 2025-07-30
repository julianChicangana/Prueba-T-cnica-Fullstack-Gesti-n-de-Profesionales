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

#crear la sentencia sql
sql = "SELECT * FROM profesionales"

#usu de execute

cursor.execute(sql)

#mostrar los resultados

registro= cursor.fetchall()

#mostrar

print(registro)

#cerrar conexion
cursor.close()
conexion.close()