// bring this in from week 18, Activity 1 

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

//const { User } = require('./models');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/myFirstDatabase', {
// //  useFindAndModify: false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// mongoose.set('useCreateIndex', true);
// mongoose.set('debug', true);


// app.get('/users', (req, res) => {
//   User.find({}).then(users => {
//     res.json(users);
//   });
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
