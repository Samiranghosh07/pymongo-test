
//********************************************** MONGODB CRUD OPERATION *****************************************

db.getCollection('col1').find({})

//Sample db operations
show dbs
use Mongotest

//Create collection 
db.createCollection('col1')

//Insert items in collection db.col1.insertMany([{},{},{}])
db.col1.insertMany([
                        {
                           "name":"tom",
                           "company":"hcl",
                           "dsg":"IT",
                           "salary":10000,
                           "age":26
                        },

                       {
                           "name":"dick",
                           "company":"hp",
                           "dsg":"Sales",
                           "salary":15000,
                           "age":27
                        },

                       {
                           "name":"harry",
                           "company":"tcs",
                           "dsg":"IT",
                           "salary":20000,
                           "age":28
                        },

                       {
                           "name":"shane",
                           "company":"kpmg",
                           "dsg":"Security",
                           "salary":40000,
                           "age":36
                        },
                   
                       {
                           "name":"mac",
                           "company":"kpmg",
                           "dsg":"Security",
                           "salary":35000,
                           "age":34
                        }
                        
])


//show items
db.col1.find()
db.col1.findOne({"name":"tom"})
db.col1.find({},{"name":1,"dsg":1,"salary":1})
db.col1.find().skip(3)
db.col1.find().limit(2).pretty()
                        
//delete items in collection
db.col1.deleteMany({})

//delete specific item in collection 
db.col1.deleteOne({"age":27})

//update item in collection
db.col1.updateOne({"name":"alex"},{$set:{"name":"mac"}})

//create single col index 
db.col1.createIndex({"name":1})

//create complex index 
db.col1.ensureIndex({"name":1,"company":1})

//index properties
db.col1.ensureIndex({"salary":1},{"unique":1})

db.col1.ensureIndex({"name":1},{"sparse":1})

db.col1.createIndex({"company":"hashed"})

//insert one item in collection
db.col1.insertMany([
                        {
                           "name":"roy",
                           "company":"hcl",
                           "dsg":"Accounts",
                           "salary":10000,
                           "age":26
                        },
                        {
                           "name":"vivek",
                           "company":"hp",
                           "dsg":"Accounts",
                           "salary":12000,
                           "age":29
                        }
])
//drop index
db.col1.dropIndex({"name":-1})

//drop all indexes 
db.col1.dropIndexes()

//aggregate functions ==> sum, avg, min, Max 

db.col1.find()
db.col1.aggregate([

    {
        $group:
        {
            "_id":"$name",
            "salary":{$sum:"$salary"}
        }
                                       
    }
    
])
    
db.col1.aggregate([

    {
        $group:
        {
            "_id":"$name",
            "salary":{$avg:"$salary"}
        }
                                       
    }
    
])
    
    
db.col1.aggregate([

    {
        $group:
        {
            "_id":"$name",
            "minimum salary of employee":{$min:"$salary"}
        }
                                       
    }, {$sort:{"name":1}}
    
])
    
    
db.col1.aggregate([

    {
        $group:
        {
            "_id":"$name",
            "salary":{$max:"$salary"}
        }
                                       
    } 
    /*{
        $match:{"company":"hcl"}
    }*/
    
])
    
    
    
    
    
    