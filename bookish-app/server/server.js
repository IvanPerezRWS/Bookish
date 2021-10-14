// bring this in from week 18, Activity 1 
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
 
const app = express();
// 
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
app.use('/posts', postRoutes);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://Chris:12345%21%40%23%24%25@cluster0.7brun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
                      
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser : true, useUnifiedTopology: true })
  .then(()=> app.listen(PORT, () => console.log(`Server running port: ${PORT}`)))
  .catch((error)=> console.log(error.message));

  // mongoose.set('useFindAndModify', false);
// const url = 'mongodb+srv://$[username]:$[password]@$[hostlist]/$[database]?retryWrites=true';

// // Use connect method to connect to the Server
// // MongoClient.connect(url, function(err, client) {
// //   assert.equal(null, err);
// //   client.close();
// // });
// //const { User } = require('./models');




//  mongoose.connect('mongodb+srv://Chris:12345!@#$%@cluster0.7brun.mongodb.net/myFirstDatabase?retryWrites=true&w=majorit', {
// // //  useFindAndModify: false,
//    useNewUrlParser: true,
//    useUnifiedTopology: true
//  });

// // mongoose.set('useCreateIndex', true);
// // mongoose.set('debug', true);


// // app.get('/users', (req, res) => {
// //   User.find({}).then(users => {
// //     res.json(users);
// //   });
// // });

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });
