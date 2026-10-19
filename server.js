const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware สำหรับอ่าน JSON และ Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// เสิร์ฟไฟล์ Static (เช่น index.html, CSS, JS, รูปภาพ) จากโฟลเดอร์ปัจจุบัน
app.use(express.static(path.join(__dirname)));

// Healthcheck Route สำหรับเช็คการทำงานของ Server
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'BMW E90 Maintenance Tracker Server is running!',
    timestamp: new Date()
  });
});

// Fallback Route ให้ส่งกลับไปหน้า index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// เริ่มต้นเปิด Server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 Local Server running at: http://localhost:${PORT}`);
  console.log(`🛠️  Press Ctrl + C to stop the server`);
  console.log(`==================================================`);
});