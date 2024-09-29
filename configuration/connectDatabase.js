// import mongoose from "mongoose";
// const mongoUrl = process.env.DB_URI || "mongodb://127.0.0.1:27017/clg";
// // console.log(process.env.DB_URI);

// export const connectDatabase = () => {
//   if (!mongoUrl) {
//     return console.log("Mongo URI not provided!");
//   }

//   mongoose
//     .connect(mongoUrl)
//     .then(() => {
//       console.log("Connected to MongoDB!!!!!");
//     })
//     .catch((error) => {
//       console.error("Connection error", error);
//     });
// };

import mongoose from "mongoose";
import dotenv from "dotenv"; // Import dotenv using ES module syntax

dotenv.config(); // Load environment variables

const mongoUrl = process.env.DB_URI || "mongodb://127.0.0.1:27017/clg";

export const connectDatabase = () => {
  if (!mongoUrl) {
    return console.log("Mongo URI not provided!");
  }

  console.log("Using Mongo URI:", mongoUrl); // Debugging log

  mongoose
    .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to MongoDB!!!!!");
    })
    .catch((error) => {
      console.error("Connection error", error);
    });
};

// Call the function to connect to the database
connectDatabase();

