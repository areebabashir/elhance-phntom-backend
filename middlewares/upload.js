// src/middlewares/upload.js
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only images are allowed!'), false);
  }
};

const upload = multer({ 
  storage, 
  fileFilter 
});

export const uploadFields = upload.fields([
  { name: 'eventPhoto', maxCount: 1 },
  { name: 'speakerPhoto', maxCount: 1 },
]);

export default upload;
