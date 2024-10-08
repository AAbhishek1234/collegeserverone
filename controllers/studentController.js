
import Student from "../models/Student.js";
import moment from 'moment'
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
// controllers/studentController.js

// Fetch all students
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