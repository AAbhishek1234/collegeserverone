import Image from "../models/Image.js";
import { imageCategory } from "../constants/image.js";
import { request } from "express";
 export const createImage = async(req,res)=>{
    let{name,category,location}=req.body;
    let file = req.file;
    console.log("createImage");
    if(
        !file||
        !category||
        !name||
        !location
    )
    {
        return res.status(400).json({success:false,message:"All fields are required"});
    }
    console.log(imageCategory[`${category}`])
    if(category && !imageCategory[`${category}`]){
        return res.status(400).json({success:false,message:"no valid category"})
    }
    let image = {
        fileName:file.fileName,
        fileType:file.mimetype,
        fileContent:file.buffer.toString("base64"),
    };
    try {
        const newImage = new Image({
          name,
          category,
          image, 
          location,
        });
    
        await newImage.save();
    
        res.status(201).json({
          success: true,
          message: "Image created successfully",
          data: newImage,
        });
      } catch (error) {
        console.error("Error while creating image:", error);
    
        res.status(500).json({
          success: false,
          message: "Server error occurred while creating image",
          error: error.message,
        });
      }
    };
    
    ///////////////GET ALL PRODUCT///////////////

    export const getImagesByCategory = async (req, res) => {
      const { category } = req.query; 
    
      if (!category) {
        return res.status(400).json({
          success: false,
          message: "No category provided",
        });
      }
    
      try {
        const images = await Image.find({ category });
    
        if (images.length === 0) {
          return res.status(404).json({
            success: false,
            message: `No images found for category: ${category}`,
          });
        }
    
        res.status(200).json({
          success: true,
          data: images,
        });
      } catch (error) {
        console.error("Error fetching images by category:", error);
    
        res.status(500).json({
          success: false,
          message: "Server error occurred while fetching images",
          error: error.message,
        });
      }
    };
    




    /////////////FETCH ALL COLLEGES//////
 export const fetchAllImages = async (req,res) => {
        const {}= request.body;
try {
    const imageDetails = await Image.find({category});
res.status(201).json(imageDetails)
} catch (error) {
    console.log(error)
    res.status(400).json({msg:"not fetch"})
}
    }

