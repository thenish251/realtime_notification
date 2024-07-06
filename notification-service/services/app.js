const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const notificationRoutes = require('./routes/notification');
const authMiddleware = require('./middleware/authMiddleware');

dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(bodyParser.json());
app.use(authMiddleware);
app.use('/api', notificationRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Notification Service running on port ${PORT}`));
