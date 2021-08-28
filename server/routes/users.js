const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => res.send("Login"));

router.get('/register', (req, res) => res.send("Register"));

router.post('/register', (req, res)=> {
    console.log(req.body);
    res.send("hello");
})

module.exports = router;