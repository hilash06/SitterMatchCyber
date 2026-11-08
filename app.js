const express = require('express');
const app = express();

const sittersRoutes = require('./routes/sitters');
const parentsRoutes = require('./routes/parents');

app.use('/api/sitters', sittersRoutes);
app.use('/api/parents', parentsRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to SitterMatch API' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.listen(3000);