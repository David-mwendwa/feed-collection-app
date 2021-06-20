const express = require('express');
const mongoose = require('mongoose');
require('./models/User');
require('./services/passport');

const app = express();
require('./routes/authRoutes')(app);

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Atlas connection successfull!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
