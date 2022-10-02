import pymongo
from createdb import *
try:
    
    data = [{"stu_name":"s1","class":8,"subject":"physical science","marks":"60%","contact":123,"hobbies":["singing","dancing"]},
            {"stu_name":"s2","class":9,"subject":"life science","marks":"70%","contact":322,"hobbies":["dancing","computer games"]},
            {"stu_name":"s3","class":10,"subject":"geography","marks":"80%","contact":456,"hobbies":["drawing","cycling"]},
            {"stu_name":"s4","class":7,"subject":"history","marks":"70%","contact":500,"hobbies":["football","cricket"]},
            {"stu_name":"s5","class":11,"subject":"english","marks":"50%","contact":856,"hobbies":["cooking","games"]},
            {"stu_name":"s6","class":12,"subject":"math","marks":"85%","contact":999,"hobbies":["reading books","gardening"]}
    ]
    c1 = db.get_collection('col2')
    c1.insert_many(data)
    print("!! records inserted successfully !!")

except Exception as err:
    print(err)