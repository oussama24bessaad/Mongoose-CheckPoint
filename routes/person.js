const express=require("express");
const router=express.Router();
const Person=require("../models/Person");
const { 
    getAllPeople,
    addNewPerson,
    addManyPeople,
    findAllByName,
    findOnePerson,
    findOnlyById,
    findEditAndSave,
    findOneAndUpdate,
    findByIdAndRemove,
    deleteMary,
    burritos } = require("../controllers/person.controllers");

// ***************************CRUD***************************
//methode: GET
//desc: get all people
//data: 
//url : http://localhost:7000/api/person/all
router.get("/all",getAllPeople);

//methode: POST
//desc: add new person --> Create and Save a Record of a Model
//data: req.body
//url : http://localhost:7000/api/person/
router.post("/newPerson",addNewPerson)

// //methode: GET /create
// //desc: add many people
// //data: req.body
// //url : http://localhost:7000/api/person/people
// // ---methode 1 (local)
//     // Person.create([
//     //     {name : 'nabil', age : 10, email:"nabil@gmail.com",phone:0000,favoriteFoods : ["fish", "omelette"]},
//     //     {name : 'salma', age : 30,email:"salma@gmail.com",phone:0001,hobby:"Running", favoriteFoods : ["Pizza", "salad"]}
//     // ]);
// //---methode 2 
router.get("/people",addManyPeople);
    
// //methode: GET
// //desc: Find all the people having a given name
// //data: req.params.name
// //url : http://localhost:7000/api/person/:name
router.get("/:name",findAllByName);

// //methode: GET
// //desc: Find just one person which has a certain food in the person's favorites
// //data: req.params.
// //url : http://localhost:7000/api/person/:id
// // router.get("/food/:food",findOnePerson);
router.get("/food/findOneFood", findOnePerson);

// //methode: GET
// //desc: Find the (only!!) person having a given _id
// //data: req.params.id
// //url : http://localhost:7000/api/person/:id
router.get("/user/:id",findOnlyById);

// //methode: PUT
// //desc: Perform Classic Updates by Running Find, Edit, then Save
// //data: req.params.id
// //url : http://localhost:7000/api/person/findEditSave/:id

router.put("/findEditSave/:id", findEditAndSave);

// //methode: PUT
// //desc: Perform New Updates on a Document Using model.findOneAndUpdate()
// //data: req.params.personName
// //url : http://localhost:7000/api/person/findOneAndUpdate/:personName
router.put("/findOneAndUpdate/:personName",findOneAndUpdate);

// //methode: DELETE
// //desc: Delete One Document Using model.findByIdAndRemove
// //data: req.params.personID
// //url : http://localhost:7000/api/person/findByIdAndRemove/:personID
router.delete("/findByIdAndRemove/:personID", findByIdAndRemove);

// //methode: DELETE
// //desc: Delete Many Documents with model.remove()
// //data: 
// //url : http://localhost:7000/api/person/deleteMary
router.delete("/deleteMary",deleteMary);

// //methode: get
// //desc: Chain Search Query Helpers to Narrow Search Results
// //data: 
// //url : http://localhost:7000/api/person/queryChain
router.get("/queryChain/burritos",burritos);

module.exports=router;