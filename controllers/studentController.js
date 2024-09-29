// import Student from "../models/Student.js";
// export const createStudent = async (req,res)=>{
//    try {
//     const {name,email,location,phoneno}= req.body;
//     const existingStudent = await Student.findOne({email});
//     if(existingStudent){
//         return res.status(400).json({message:" this email already exists"})
//     }
//     const newStudent = new Student({
//         name,
//         email,
//         location,
//         phoneno
//     });
//     const savedStudent = await newStudent.save();
//     res.status(201).json(savedStudent);
//    } 
//    catch (error) {
//     res.status(500).json({ message: 'Server error', error });
//    } 
// };

import Student from "../models/Student.js";

export const createStudent = async (req, res) => {
    try {
        const { name, email, location, phoneno } = req.body;

        // Check if the student with the provided email already exists
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: "This email already exists." });
        }

        // Create a new student instance
        const newStudent = new Student({
            name,
            email,
            location,
            phoneno
        });

        // Save the student to the database
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } 
    catch (error) {
        console.error("Error creating student:", error);  // Log the error details
        res.status(500).json({ message: 'Server error', error: error.message || error }); // Return error message
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
  