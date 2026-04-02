const fs = require('fs');

console.log('File exists:', fs.existsSync('../.config.env'));
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: '../.config.env'});
// dotenv.config({ path: path.join(__dirname, '../config.env') });

// console.log(process.env);
console.log('DATABASE value:', process.env.DATABASE);
console.log('DATABASE type:', typeof process.env.DATABASE);


const app = require('./app');

const DB = process.env.DATABASE.replace(
    '<PASSWORD>', 
    process.env.DATABASE_PASSWORD,
);

// console.log(process.env.DATABASE);
// console.log(typeof process.env.DATABASE);
console.log('DATABASE value:', process.env.DATABASE);
console.log('DATABASE type:', typeof process.env.DATABASE);

const port = process.env.PORT || 3000;

mongoose.connect(DB).then(() =>
console.log('DB connection successful'));

// mongoose.connect(process.env.DATABASE_URL)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('DB connection error:', err));

app.listen(port, () => {
    console.log(`app running on ${port}...`);
});