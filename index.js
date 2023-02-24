const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const { connectToDatabase } = require('./config');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 7000;

connectToDatabase()

app.get('/', (req, res) => {
    res.send('Hello from netflix API!');
});

app.use('/list', require('./routes/list'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});