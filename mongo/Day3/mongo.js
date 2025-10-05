use facultySystemV2

 db.createCollection ("students" , {
    validator : {
      $jsonSchema : {
        bsonType : "object" ,
        required : ["firstName" , "lastName" , "isFired" , "facultyid" , "courses"] ,
         additionalProperties: false,
          properties: {
            _id : {
              bsonType : "number"
            },
            firstName : {
              bsonType : "string"
            }, 
            lastName : {
              bsonType : "string"
            }, 
            isFired : {
              bsonType:"bool"
            },
            facultyid : {
              bsonType : "number"
            },
            courses : {
              bsonType : "array" ,
              items : {
                bsonType : "object" ,
              }
            }
          }
      }
    }
 })
 
 
 db.createCollection ("faculty" , {
  validator : {
    $jsonSchema : {
      bsonType : "object" , 
      required : ["facultyName" , "address"] , 
      additionalProperties : false , 
      properties : {
        _id : {
          bsonType : "number" 
        }, 
        facultyName : {
          bsonType : "string"
        }, 
        address : {
          bsonType : "string"
        }
      }
    }
  }
})

db.courses.drop
db.createCollection ("courses" , {
  validator : {
    $jsonSchema : {
      bsonType : "object" , 
      required : ["courseName" , "finalMark"] , 
      additionalProperties : false , 
      properties : {
        _id : {
          bsonType : "number" 
        }, 
        courseName : {
          bsonType : "string"
        }, 
        finalMark : {
          bsonType : "number"
        }
      }
    }
  }
})


db.courses.insertMany([
  {_id : 1 , courseName: "js", finalMark: 100 },
  { _id : 2 ,courseName: "python", finalMark: 100 },
  { _id : 3 , courseName: "java", finalMark: 95 },
  { _id : 4 , courseName: "c++", finalMark: 80 }
])


db.students.insertMany ( [{
  _id : 1 , firstName : "abdo" , lastName : "hashem" , isFired :false , facultyid :1 , courses : [{courseID : 1 , grade : 80} , {courseID : 2 , grade : 90}]
  
}, 
{
  _id : 2 , firstName : "mohamed" , lastName : "ahmed" , isFired :false , facultyid :2 , courses : [{courseID : 1 , grade : 95} , {courseID : 2 , grade : 94}]
  
},
{
  _id : 3 , firstName : "ahmed" , lastName : "mohamed" , isFired :true , facultyid :2 , courses : [{courseID : 1 , grade : 85} , {courseID : 3 , grade : 92}]
}
])

db.fuculty.insertMany ([{
  _id : 1 , facultyName : "AUC" , address : "Cairo" 
} , 
{ _id : 2 , facultyName : "IEEE" , address : "Cairo" },

{ _id : 3 , facultyName : "CPU" , address : "alex" }

])

db.courses.insertMany ([{
  _id : 1 , CourseName :"js" , finalMark : 100
},
{
  id : 2 , CourseName :"paython" , finalMark : 100
},
{
  id : 3 , CourseName :"java" , finalMark : 95
},
{
  id : 4 , CourseName :"c++" , finalMark : 80
}
])


/////////////////////////////////////////////////
db.students.aggregate([{
  $project : {
    fullName : {$concat : ["$firstName" , " ", "$lastName"]}, 
    avgGrade : {$avg : "$courses.grade"}
  }
}])
db.courses.find({})

////////////////////////////////
  db.courses.aggregate ([{
    $group : {
        _id:"Sum",
      totalFinal : {$sum : "$finalMark"}
    }
  }])
  
  

db.students.aggregate([
  {
    $match: { firstName: "abdo", lastName: "hashem" }
  },
  {
    $lookup: {
      from: "courses",
      localField: "courses.courseID",
      foreignField: "_id",
      as: "studentCourses"
    }
  },
  {
    $project: {
      _id: 0,
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      "studentCourses.courseName": 1,
      "studentCourses.finalMark": 1
    }
  }
])

db.students.aggregate([
  {
    $match: { firstName: "abdo", lastName: "hashem" }
  },
  {
    $lookup: {
      from: "fuculty",
      localField: "facultyid",
      foreignField: "_id",
      as: "studentFaculty"
    }
  },
  {
    $project: {
      fullName: { $concat: ["$firstName", " ", "$lastName"] },
      "studentFaculty.facultyName": 1,
      "studentFaculty.address": 1
    }
  }
])


 