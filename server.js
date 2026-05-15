const express = require('express');
const dotenv = require('dotenv');

const { connectDB } = require('./config/db');
const demoRoutes = require('./routes/demo.route');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/demo', demoRoutes);

// Basic health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Error handler (Mongoose/validation-safe)
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  });

