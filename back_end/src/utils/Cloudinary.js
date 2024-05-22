import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true,
});

const uploadToCloudinary = async (photoPath) => {
  try {
    if (!photoPath) {
      return null;
    }
    const uploadedPhoto = await cloudinary.uploader.upload(photoPath, {
      resource_type: "auto",
    });
    fs.unlinkSync(photoPath);
    return uploadedPhoto;
  } catch (error) {
    fs.unlinkSync(photoPath);
    console.log("error during upload to cloudinary", error);
    return null;
  }
};

export { uploadToCloudinary };
