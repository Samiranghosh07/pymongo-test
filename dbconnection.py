from sqlite3 import DatabaseError
import pymongo

try:
    print("Welcome To MongoDB")
    print("=====================")
    mongo_connect = pymongo.MongoClient(host="127.0.0.1",port=27017)
    print("!! Mongo client successfully connected to Mongodb Server !!")
except Exception as err:
    print(err)