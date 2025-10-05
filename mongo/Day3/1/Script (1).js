    db.getCollection("instructors").find({})
    
    //Display all instructors with salaries greater than 4000 (only show 
    //firstName and salary)
    
    //////////////////////////////////////////
    db.instructors.find({ salary: { $gt: 4000 } }, { firstName: 1, salary: 1 })
    ///////////////////////////
    db.instructors.find({ age: { $lte: 25 } })
    
    //Display all instructors with city mansoura and sreet number 10 or 14
    //only display (firstname,address,salary).
    
    db.instructors.find({ "address.city": "mansoura", "address.street": { $in: [10, 14] } }, { firstName: 1, address: 1, salary: 1 })
    ////////////////////////////
    db.instructors.find({ courses: {$all: ["js","jquery"]}})
    
//    Display number of courses for each instructor and display first name 
//with number of courses. 
//    

db.instructors.find().forEach((ins)=>{
    print(`Name : ${ins.firstName} , courses :${ins.courses?.length}`)
})


//Write mongodb query to get all instructors that have firstName and 
//lastName properties , sort them by firstName ascending then by 
//lastName descending and finally display their data FullName and age

let arr = [];
db.instructors
  .find(
    { firstName: { $exists: true }, lastName: { $exists: true } },
    { firstName: 1, lastName: 1, age: 1, _id: 0 }
  )
  .sort({ firstName: 1, lastName: -1 })
  .forEach((ins) => {
    arr.push({fullName : ins.firstName +' '+ins.lastName , age : ins.age});
    
  });
  
print(arr);
   
   ///////////////////////////
   db.createCollection("instructorsData")
   db.instructorsData.insertMany(arr)
   db.instructorsData.find()
   
   //////////////////////
   db.instructorsData.find ({fullName : {$regex : "mohammed"}})
   
   
   /////////////////////////////////
   db.instructors.deleteMany({firstName : "ebtesam" , courses : {$size : 5} })
   
   db.instructors.find()
   
   /////////////////////////
     db.instructors.updateMany({}, {$set : {active : true} })
     
     ////////////////////////////////////////
 db.instructors.updateMany(
  { firstName: "mazen", lastName: "mohammed", courses: "EF" },
  { $set: { "courses.$": "jequery" } }
);
db.instructors.find({});

/////////////////////////////
db.instructors.updateOne(
  { firstName: "noha", lastName: "hesham" },
  { $push: { courses: "jquery" } }
);


/////////////////////////////
db.instructors.updateOne(
  { firstName: "laila", lastName: "tarek" },
  { $unset: { courses: "" } }
);

///////////////////////////////
db.instructors.updateMany(
  { courses: { $size: 3 } },
  { $inc: { salary: -500 } }
);


//////////////////////////////
db.instructors.updateMany({}, { $rename: { address: "FullAdress" } });


////////////////////////////////////////
db.instructors.updateOne(
  { firstName: "noha", lastName: "hesham" },
  { $set: { "FullAdress.street": 20 } }
);


/////////////////////////////////////
//{ $push: { <field>: { $each: [ <value1>, <value2> ... ] } } }

db.instructors.updateMany({ firstName: "noha", lastName: "hesham" }, {$push : {courses : { $each :[ "js" , " jequey" , "dataStracture"]}}})

/////////////////////////////////////////

db.instructors.updateMany({ firstName: "noha", lastName: "hesham" }, {$push : 
    {courses : { 
        $each :[ "js" , " jequey" , "dataStracture"] , 
        $slice : 2}}})


////////////////////////////////
db.instructors.updateMany({ firstName: "noha", lastName: "hesham" }, {$push : {courses : { $each :[ "ds" , " java" , ""], $position:2}}})



// Create new database named: FacultySystemV2. 

use facultySystemV2 


// • Create student collection that has (FirstName, lastName, IsFired, FacultyID, array of objects, each object has CourseID, grade). 
 db.createCollection ("students" , {
    validator : {
      $jsonSchema : {
        bsonType : "objesct" ,
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
              bsonType:"boolean"
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
// • Create Faculty collection that has (Faculty Name, Address). 
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
// • Create Course collection, which has (CourseName, FinalMark). 
db.createCollection("courses" , {
   validator :{
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
         finalMark : {}
      }
    }
   }
})
// • Insert some data in previous collections.

db.courses.insertMany ([{
  _id : 1 , CourseName :"js" , FinalMark : 100
},
{
  id : 2 , CourseName :"paython" , FinalMark : 100
},
{
  id : 3 , CourseName :"java" , FinalMark : 95
},
{
  id : 4 , CourseName :"c++" , FinalMark : 80
}
])

db.fuculty.insertMany ([{
  _id : 1 , facultyName : "AUC" , address : "Cairo" 
} , 
{ _id : 2 , facultyName : "IEEE" , address : "Cairo" },

{ _id : 3 , facultyName : "CPU" , address : "alex" }

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


// Display each student Full Name along with his average grade in all courses. $concat

db.students.aggregate([{
  $project : {
    fullName : {$concat : ["$firstName" , " ", "$lastName"]}, 
    avgGrade : {$avg : "$courses.grade"}
  }
}])


// Using aggregation display the sum of final mark for all courses in Course collection.
  db.courses.aggregate ([{
    $group : {
      totalFinal : {$sum : "$FinalMark"}
    }
  }])

// Implement (one to many) relation between Student and Course, by adding array of Courses IDs in the student object. 
// • Select specific student with his name, and then display his courses.

db.students.aggregate ([{
  $match : {firstName : "abdo" , lastName : "hashem"},
  $lookup : {
    from : "courses" , 
    localField : "courses.courseID",
    foreignField : "_id" ,
    as : "studentCourses"  
  } ,
  $project : {
    _id : 0 , 
    fullName : {$concat : ["$firstName" , " " , "$lastName"]} ,
    studentCourses : {courseName : 1 , finalMark : 1 , _id : 0}
  }
}])

//  {
//    $lookup:
//      {
//        from: <collection to join>,
//        localField: <field from the input documents>,
//        foreignField: <field from the documents of the "from" collection>,
//        let: { <var_1>: <expression>, …, <var_n>: <expression> },
//        pipeline: [ <pipeline to run> ],
//        as: <output array field>
//      }
// }


// .Implement relation between Student and faculty by adding the faculty object in the student using _id Relation using $Lookup. 
// • Select specific student with his name, and then display his faculty

db.students.aggregate ([{
   $match : {firstName : "abdo" , lastName : "hashem"},
   $lookup : {
    from : "faculty" , 
    localField : "facultyid" , 
    foreignField : "_id" , 
    as : "studentFaculty"
   } , 
   $project : {
    _id :0 , 
     fullName : {$concat : ["$firstName" , " " , "$lastName"]} ,
     studentFaculty : {facultyName : 1 , address : 1 , _id :0}

   }
}])