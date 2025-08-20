// server/db.js
const mongoose = require('mongoose');
require('dotenv').config(); // To use MONGO_URI from .env

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
});

module.exports = mongoose;
 
