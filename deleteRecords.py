import pymongo
from createdb import *
try:
    
    c1 = db.get_collection('col2')
    c1.delete_one({"stu_name":"s6"})
    print("!! delete record successfully !!")

except Exception as err:
    print(err)