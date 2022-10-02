import pymongo
from dbconnection import * 
from createdb import *
try:
    #drop col and db in MONGODB 
    db_drop_name = input("enter database that you want to drop :")
    col_drop_name = input("enter collection name that you want to drop :")
    mongo_connect.drop_database(db_drop_name)
    db.drop_collection(col_drop_name)

    print("db and col dropped successfully !!")
except Exception as err:
    print(err)