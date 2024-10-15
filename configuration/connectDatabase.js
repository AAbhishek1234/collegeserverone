import mongoose from "mongoose";
const mongoUrl = process.env.DB_URl || "mongodb://127.0.0.1:27017/clg";

export const connectDatabase = () => {
  if (!mongoUrl) {
    return console.log("Mongo URI not provided!");
  }
  mongoose
    .connect(mongoUrl)
    .then(() => {
      console.log("Connected to MongoDB!!!!!");
    })
    .catch((error) => {
      console.error("Connection error", error);
    });
};



///---------------------------------ATLAS----///
// import mongoose from "mongoose";

// // Use the correct connection string from MongoDB Atlas
// const mongoURL = "mongodb+srv://viraj:viraj123@cluster0.3ut9t.mongodb.net/";

// export const connectDatabase = () => {
//   if (!mongoURL) {
//     return console.log("Mongo URI not provided!");
//   }

//   mongoose
//     .connect(mongoURL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     })
//     .then(() => {
//       console.log("Connected to MongoDB!!!!!");
//     })
//     .catch((error) => {
//       console.error("Connection error", error);
//     });
// };

/////---------admin ------////
// import mongoose from "mongoose";
// import dotenv from "dotenv";

// // Load environment variables from .env
// dotenv.config();
// console.log('Loaded environment variables:', process.env.MONGO_URI);

// // Load MongoDB URI from the .env file


// // Define the connectDatabase function
// export const connectDatabase = () => {
//   console.log("MONGO_URI:", process.env.MONGO_URI); // Debugging to check if the URI is loaded

//   const mongoURL = process.env.MONGO_URI;

//   if (!mongoURL) {
//       return console.log("Mongo URI not provided!"); // Error handling
//   }

//   mongoose
//     .connect(mongoURL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       console.log("Connected to MongoDB Atlas successfully!");
//     })
//     .catch((error) => {
//       console.error("MongoDB connection error:", error.message);
//     });
// };