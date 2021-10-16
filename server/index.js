
import express from 'express';
// import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

import dotenv from 'dotenv';

const app = express();
dotenv.config();

// app.use(bodyParser.json({limit: '30mb', extended:true}))
// app.use(bodyParser.urlencoded({limit: '30mb', extended:true}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();


app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    req.setEncoding('Bookish');
});



// Connect app to mongodb on cloud atlas

//const CONNECTION_URL = 'mongodb+srv://Chris:12345%21%40%23%24%25@cluster0.7brun.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));

// This makes sure we dont get any warnings in the console. App crashes if implemented. Error: `useFindAndModify` is an invalid option.
// mongoose.set('useFindAndModify', false);

if (process.env === 'production') {
    app.use(express.static('client/build'));
}
