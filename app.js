const express = require('express');
const path = require('path');
const app = express();
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

app.use(express.json());

// Serve frontend HTML
app.use(express.static(path.join(__dirname, 'frontend')));

// API routes
app.use('/api/tasks', taskRoutes);

// Fallback for SPA (optional for frontend routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

module.exports = app;
