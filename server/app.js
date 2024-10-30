require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

const contactRoute = require('./routes/contact');
app.use('/api/contact', contactRoute);

app.get('/', (req, res) => {
    res.send('Welcome to my Portfolio API');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
