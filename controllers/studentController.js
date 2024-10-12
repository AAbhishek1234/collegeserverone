
import Student from "../models/Student.js";
import moment from 'moment'

export const createStudent = async (req, res) => {
    try {
        const { name, email, location, phoneno } = req.body;

        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: "This email already exists." });
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
        console.error("Error creating student:", error);  
        res.status(500).json({ message: 'Server error', error: error.message || error }); // Return error message
    } 
};





////////--------FETCH--------///////







export const getAllStudent = async (req, res) => {
    try {
        const students = await Student.find();
        if (!students || students.length === 0) {
            return res.status(404).json({ message: 'No students found' });
        }
        const studentsWithFormattedDate = students.map(student => {
            // Log the original createdAt date for debugging
            console.log("Original createdAt:", student.createdAt);
            // Format with consideration of UTC
            const formattedDate = moment.utc(student.createdAt).local().format('dddd, MMMM Do YYYY, h:mm:ss A');
            return {
                ...student._doc, // Spread the existing student data
                createdAt: formattedDate // Overwrite 'createdAt' with formatted date
            };
        });

        // Send the updated student data
        res.status(200).json(studentsWithFormattedDate);
    }catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};




///////////////------DELETE  RECORD-------/////////


export const deleteStudent = async (req, res) => {
    const { id } = req.body; 
    console.log("Received ID:", id); 

    if (!id) {
        return res.status(400).json({ message: "ID is required" }); 
    }

    try {
        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            console.log("No student found with this ID."); 
            return res.status(404).json({ message: "Student not found" }); 
        }

        res.status(200).json({ message: "Student deleted successfully", deletedStudent });
    } catch (error) {
        console.error("Error deleting student:", error); 
        res.status(500).json({ message: "Server error", error: error.message || error }); 
    }
};
