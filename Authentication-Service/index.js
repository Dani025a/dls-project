const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect('/auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error('Error connecting to MongoDB:', err));