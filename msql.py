import pymysql
mydb = pymysql.connect(
    host='sh-cdb-bki05w7g.sql.tencentcdb.com',
    port=36350,
    user='wx',
    password='wx'
)
print(mydb)