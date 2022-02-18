const mongoose=require("mongoose");
const {Schema} =mongoose;

const PersonSchema=new Schema({
    name:
    {
        type:String,
        required:true,
    },
    age:Number,
    email:{
        type:String,
        required:true,
        unique:true,
            },
    phone:{
        type:Number,
        required:true,
        unique:true,
            },
    hobby:String,
    favoriteFoods:[String]
});

// create model in DB
// our model named "person"
// mongoose will be created automatically a new collection in DB named "people" 
module.exports=Contact=mongoose.model("person",PersonSchema);