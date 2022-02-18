const Person=require("../models/Person");

exports.getAllPeople=async (req,res)=>{
    try{
        const findAll=await Person.find();
        res.status(200).send({msg:"get all people",findAll})
    }catch(error){
        res.status(400).send({msg:"failed",error})
    }
}

exports.addNewPerson=async (req,res)=>{
    try{
        const findPerson=await Person.findOne({email:req.body.email,phone:req.body.phone});
        if(findPerson){return res.status(400).send({msg:"User already exists, check your Email and Phone"});}
    // // ---create new person
    // // console.log(req.body);
    const newPerson=new Person(req.body);
    await newPerson.save();
    res.status(200).send({msg:"Add person succ",newPerson});
    }catch(error){
        res.status(400).send({msg:"can not save this person",error})
    }
}

exports.addManyPeople=async(req,res)=>{
    try{
    const newPeople=await Person.create(req.body);
    res.status(200).send({msg:"added people succ",newPeople});
    }catch(error){
        res.status(400).send({msg:"failed !",error})
    }
}

exports.findAllByName=
async (req,res)=>{
    try{
        const findPeople=await Person.find({name:req.params.name});
        res.status(200).send({msg:"succ",findPeople});
    }catch(error){
        res.status(400).send({msg:"failed"});
    }
}
// *********-1-methode with using req.params
// exports.findOnePerson=async(req,res)=>{
//     try{
//         const food=await Person.findOne({favoriteFoods:req.params.food})
//         res.status(200).send({msg:"yes",food});
//     }catch(error){
//         res.status(400).send({msg:"failed",error});
//     }
// }
// **********-2-methode with using req.body
exports.findOnePerson=async (req, res) => {
try{
    const food = req.body.favoriteFoods;
    const result= await Person.findOne({ favoriteFoods:{$all:food }});
    if(result){return res.status(200).send({msg:"yes ,i found it",result})}
    res.status(200).send({msg:"there's no food!! try another one"});
    }catch(error){res.status(400).send({msg:"failed",error});
};
}

exports.findOnlyById=async(req,res)=>{
    try{
        const findPersonById=await Person.findOne({_id:req.params.id});
        res.status(200).send({msg:"succ",findPersonById});
    }catch(error){
        res.status(400).send({msg:"failed",error});
    }
}

exports.findEditAndSave=(req, res) => {
    Person.findById(req.params.id, (error, data) => {
    if (error) {
        console.log(error);
    } else {
        data.favoriteFoods.push("hamburger"),
        data.save((error, person) => {
            error 
            ? res.status(400).send({msg:"failed",error}) 
            : res.status(200).send({msg:"update succ",person});
        });
    }
    });
}


exports.findOneAndUpdate=async(req,res)=>{
    try{
    const result=await Person.findOneAndUpdate(
        {name:req.params.personName},
        {$set:{age:20}},
        {new:true}
    )
    // console.log(result.nModified);
res.status(200).send({msg:"succ",result});    
}catch(error){
        res.status(400).send({msg:"failed",error});
    }
}

exports.findByIdAndRemove=async (req,res)=>{
    try {
        const result= await Person.findByIdAndRemove({_id:req.params.personID});
        res.status(200).send({msg:"succ",result});
    } catch (error) {
        res.status(400).send({msg:"failed",error})
    }
}

exports.deleteMary=async (req,res)=>{
    try {
        const result= await Person.remove({name:/Mary/i})
        res.status(200).send({msg:"succ",result})
    } catch (error) {
        res.status(400).send({msg:"failed",error})
        
    }
}

exports.burritos=(req, res) => {
    Person.find({ favoriteFoods: { $all: ["burritos"] } })
    .sort({ name: 1 })
    .limit(2)
    .select("-age") //.select({age:false})
    .exec((err, data) => {
        err 
        ? res.send(err) :
        (!data[0])?res.send({msg:"no one like Burritos"}):
        res.send(data);
    });
}