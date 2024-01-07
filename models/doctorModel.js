const mongoose=require('mongoose')
const doctorSchema=new mongoose.Schema({
    userId:{
        type:String,
        
    },
    firstName:{
        type:String,
        required:[true,"first name is require"]
    },
    lastName:{
        type:String,
        required:[true,"last name is require"]
    },
    phone:{
        type:String,
        required:[true,"phone no is require"]
    },
    email:{
        type:String,
        required:[true,"email is require"]
    },
    website:{
        type:String,
    },
    address:{
        type:String,
        required:[true,"address is require"]
    },
    specialization:{
        type:String,
        required:[true,"specialization is require"]
    },
    experience:{
        type:String,
        required:[true,"experience is require"]
    },
    feesPerConsultation:{
        type:Number,
        required:[true,"fee is require"]
    },
    status:{
        type:String,
        default:'pending',
    },
    timing:{
        type:Object,
        required:[true,"work timing is require"]
    },
},{timestamps:true}
)
const doctorModel=mongoose.model('doctors',doctorSchema)
module.exports=doctorModel