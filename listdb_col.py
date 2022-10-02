import pymongo
from  dbconnection import *
from createdb import *
try:
    #find list of dbs and cols
    print("List of MongoDB Database")
    print("==============================")
    print(mongo_connect.list_database_names())
    print("List of MongoDB Collection")
    print("==============================")
    print(db.list_collection_names())
except Exception as err:
    print(err)