// import Admin from '../models/Admin.js';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

// // Register Admin (First time, one-time setup)
// export const registerAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         console.log('Received request to register admin:', { email }); // Log incoming data

//         // Check if admin already exists
//         const existingAdmin = await Admin.findOne({ email });
//         if (existingAdmin) {
//             return res.status(400).json({ message: 'Admin account already exists' });
//         }

//         // Hash the password
//         // In registerAdmin controller
// const saltRounds = 10;
// const hashedPassword = await bcrypt.hash(password, saltRounds);

//         // Create a new admin and save it in the database
//         const newAdmin = new Admin({ email, password: hashedPassword });
//         await newAdmin.save();

//         console.log('Admin created successfully:', newAdmin); // Log success
//         res.status(201).json({ message: 'Admin account created successfully' });
//     } catch (error) {
//         console.error('Error during admin registration:', error); // Log the error
//         return res.status(500).json({ message: 'Internal server error', error: error.message });
//     }
// };


// // Admin Login
// export const loginAdmin = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         console.log('Login attempt for email:', email); // Log the email trying to log in

//         // Find the admin by email
//         const admin = await Admin.findOne({ email });
//         if (!admin) {
//             console.log('No admin found with this email'); // Log if no admin is found
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         console.log('Admin found:', admin); // Log found admin details

//         // Compare the password
//         const match = await bcrypt.compare(password, admin.password);
//         if (!match) {
//             console.log('Password mismatch for email:', email); // Log if passwords do not match
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         console.log('Password matched for email:', email); // Log success in password matching

//         // Generate a JWT token
//         const token = jwt.sign({ email: admin.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
//         return res.json({ token });
//     } catch (error) {
//         console.error('Error during login:', error); // Log any unexpected errors
//         return res.status(500).json({ message: 'Internal server error' });
//     }
// };







// // Other imports and your registerAdmin and loginAdmin functions

// // Token verification middleware
// export const verifyToken = (req, res, next) => {
//     const token = req.headers.authorization?.split(" ")[1];

//     if (!token) {
//         return res.status(403).json({ message: 'Token is required' });
//     }

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//         if (err) return res.status(403).json({ message: 'Invalid token' });
//         req.user = user;
//         next();
//     });
// };

// // Ensure you also export registerAdmin and loginAdmin if you haven't









import Admin from '../models/Admin.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Admin Registration (Optional if you want to pre-create an admin)
export const registerAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if an admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: 'Admin already exists' });
        }

        // Create and save the new admin
        const newAdmin = new Admin({ email, password });
        await newAdmin.save();

        return res.status(201).json({ message: 'Admin created successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

// Admin Login
export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    console.log('Request data:', { email, password });  // Log incoming request

    try {
        const admin = await Admin.findOne({ email });
        if (!admin) {
            console.error('Admin not found:', email);
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            console.error('Password mismatch:', email);
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ email: admin.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        console.log('Token generated for:', email);
        return res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error', error: error.message });
    }
};



