import Student from "../models/Student.js";
export const createStudent = async (req,res)=>{
   try {
    const {name,email,location,phoneno}= req.body;
    const existingStudent = await Student.findOne({email});
    if(existingStudent){
        return res.status(400).json({message:" this email already exists"})
    }
    const newStudent = new Student({
        name,
        email,
        location,
        phoneno
    });
    const savedStudent = await newStudent.save();
    res.status(201).json(savedStudent);
   } 
   catch (error) {
    res.status(500).json({ message: 'Server error', error });
   } 
};





////////--------FETCH--------///////


  // Fetch all Students data
  export const getAllStudent = async (req, res) => {
    try {
      const students = await Student.find();  
  
      if (!students || students.length === 0) {
        return res.status(404).json({ message: 'No Student data found' });
      }
  
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  