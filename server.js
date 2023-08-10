// basic dependencies
const express = require('express');
const cors = require('cors');
require('dotenv');
const mongoose = require('mongoose');
const Pages = require('./routes/pages.js');
console.log('starting')



const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method, req.body, `Server message from ${PORT}`),
    next()
})




const URI = process.env.MONGODB_URI;
mongoose.strict = false;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApiVersion: '1' });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
}   );



// routes   
app.use('/pages', Pages);
// app.use('/books', require('./routes/books.js'));







app.listen(PORT, () => {    
    console.log(`Server is running on port: ${PORT}`);
} );
