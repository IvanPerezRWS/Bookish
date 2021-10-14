
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// Connect app to mongodb on cloud atlas

const CONNECTION_URL = 'mongodb+srv://ivanrws-Admin:NPJ3khyb@cluster0.xm48f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const PORT = process.env.PORT || 3000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`)))
.catch((error) => console.log(error.message));

// This makes sure we dont get any warnings in the console. App crashes if implemented. Error: `useFindAndModify` is an invalid option.
//mongoose.set('useFindAndModify', false);

