var requirejs = require('requirejs')
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const findMe = requirejs('find-me')

console.log(findMe)



 

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });const connection = mongoose.connection;connection.once('open', () => {  console.log("MongoDB database connection established successfully");})
const addLocationsRouter = require('./routes/addLocations.models');
const contactsRouter = require('./routes/contacts.models');
const homeRouter = require('../src/components/Home')
const allLocationsRouter = require('../src/components/alllocations')

app.use('/allLocations', allLocationsRouter)
app.use('/Home', homeRouter);
app.use('/addLocations', addLocationsRouter);
app.use('/contacts', contactsRouter);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});