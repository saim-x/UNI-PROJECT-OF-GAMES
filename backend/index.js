import express from 'express';
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to saim ')

})



mongoose
    .connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('App is connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`App is running on port ${PORT}`);
        })
    })
    .catch((error) => {
        console.log('Error in connecting to MongoDB', error);
    })