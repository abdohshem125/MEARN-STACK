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







   
   