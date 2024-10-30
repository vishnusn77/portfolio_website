const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name, email, message } = req.body;
    // Here you can add logic to save the contact data or send an email
    res.status(200).json({ msg: 'Contact message received' });
});

module.exports = router;
