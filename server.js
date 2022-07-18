const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000 || process.env.PORT;


// Connect to MongoDB
mongoose.connect('mongodb://localhost/BasicLogin');






// Start up the Server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});