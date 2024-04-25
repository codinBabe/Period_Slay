import express from "express";
import { storage } from "../middleware/firebase.js";
import { ref, uploadBytes } from "firebase/storage";
import uniqid from "uniqid";
import multer from "multer";

const router = express.Router();
const upload = multer();

router.post("/", upload.single("file"), async (req, res) => {
  const file = req.file;

  if (file) {
    const ext = file.originalname.split(".").slice(-1)[0];
    const newFileName = uniqid() + "." + ext;

    const storageRef = ref(storage, `uploads/${newFileName}`);
    const metadata = await uploadBytes(storageRef, file.buffer);
    const fullPath = metadata;

    if (!fullPath) {
      return res.status(403).json({
        error: "There was some error while uploading the file.",
      });
    }
    const fileURL = `https://storage.googleapis.com/${storageRef.bucket}/${storageRef.fullPath}`;

    return res.json(fileURL);
  }
  return res.json(true);
});
export default router;
