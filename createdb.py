import pymongo
import dbconnection

try:
    
    #create database and collection in Mongodb
    #db_name = input("enter database name :")
    db = dbconnection.mongo_connect.get_database('testmongo')
    #col_name = input("enter collection name :")
    col = db.create_collection('col2')
    print("db : {} and collection : {} has created for mongodb test ".format(db,col))
except Exception as err:
    print(err)