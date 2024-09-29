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

import mongoose from 'mongoose';
const mongoUrl = process.env.DB_URI; // Ensure this points to your cloud database URI

export const connectDatabase = () => {
    if (!mongoUrl) {
        return console.log("Mongo URI not provided!");
    }

    mongoose.connect(mongoUrl)
        .then(() => {
            console.log("Connected to MongoDB!");
        })
        .catch((error) => {
            console.error("Connection error", error);
        });
};
