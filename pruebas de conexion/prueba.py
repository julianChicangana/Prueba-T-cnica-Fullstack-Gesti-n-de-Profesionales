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

#consulta sql
sql = "SELECT * FROM profesional"

#ejecutar consulta
cursor.execute(sql)

#obtener resultados
resultados = cursor.fetchall()
print(resultados)

#cerrar conexion
cursor.close()
conexion.close()