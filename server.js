// basic dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const Pages = require('./src/routes/pages.js');
const {ServerApiVersion} = require('mongodb');

console.log('starting server')

// database connection
const URI = process.env.MONGO_URI;
mongoose.strict = false;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, ServerApi: ServerApiVersion.v1});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
}   ); 

// entry point
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method, req.body, `Server message from ${PORT}`),
    next()
});


// routes   
app.use('/pages', Pages);
// app.use('/books', require('./routes/books.js'));
app.use((req, res) => {
    res.status(200).send('Online');
}   );



// sending data to the front end
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
}   );



// server running
app.listen(PORT, () => {    
    console.log(`Server is running on port: ${PORT}`);
} );
 