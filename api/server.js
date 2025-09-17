const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Cấu hình lưu file upload vào thư mục uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// API upload file
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ filename: req.file.filename, message: 'File uploaded successfully' });
});

// API nhận dạng OCR (mẫu)
app.post('/recognize', (req, res) => {
  // Nhận dữ liệu: filename, language, format, pages
  const { filename, language, format, pages } = req.body;
  // Xử lý nhận dạng ở đây (tích hợp OCR thật nếu cần)
  res.json({ result: `Đã nhận dạng file ${filename} với ngôn ngữ ${language}, định dạng ${format}, trang: ${pages}` });
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
