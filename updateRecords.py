import pymongo
from createdb import *
try:
    
    c1 = db.get_collection('col2')
    c1.update_one({"stu_name":"s1"},{"$set":{"stu_name":"samuel norton"}})
    print("!! records updated successfully !!")

except Exception as err:
    print(err)