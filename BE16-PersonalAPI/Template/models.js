const {mongoose} = require('../configs/dbConnection');


const DepartmentSchema = new mongoose.Schema ({
  name:{
    type: String,
    trim:true,
    required:true,
    unique: true
  }
},{
  collection: ' departments',
  timestamps: true
})

module.exports=mongoose.model("Deparmant", DepartmentSchema)

const PersonnelSchema = new mongoose.Schema ({
   Id: {
  departmentId: mongoose.Schema.Types.ObjectId,
  type: String,
  unique: true,
  trim: true
   },
},{
  collection: ' personnel',
  timestamps: true
})

