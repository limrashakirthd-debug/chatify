import { v2 as cloudinary } from "cloudinary";
import { ENV } from "./env.js";

cloudinary.config({

// chatgpt
// console.log("Cloud Name:", ENV.CLOUDINARY_CLOUD_NAME);
// console.log("API Key:", ENV.CLOUDINARY_API_KEY);
// console.log("API Secret exists:", !!ENV.CLOUDINARY_API_SECRET);
// chatgpt

  cloud_name: ENV.CLOUDINARY_CLOUD_NAME,
  api_key: ENV.CLOUDINARY_API_KEY,
  api_secret: ENV.CLOUDINARY_API_SECRET,
});

export default cloudinary;
