import express from "express";
import fs from "fs"

const app = express();

app.use(express.static("/public"));

// Ensure uploads directory exists
const uploadDir = path.join(__dirname, 'public');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueName + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Middleware to serve static files
app.use("/public", express.static(path.join(__dirname, "public")));

// Route for single image upload
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  res.json({
    message: "File uploaded successfully",
    filePath: `/public/${req.file.filename}`,
  });
});

export { app };
