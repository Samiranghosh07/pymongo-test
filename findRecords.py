import pymongo
from createdb import *
try:
    #find records
    coln = db.get_collection('col2')
    #find_records = coln.find({},{"stu_name":1,"class":1,"marks":1})
    find_records = coln.find({})
    for i in find_records:
        print(i)

except Exception as err:
    print(err)