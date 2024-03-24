const express = require('express');

const router = express.Router();

router.post('/add', (req, res) => {

    console.log(req.body);

    res.send('add post response');
});

router.get('/getall', (req, res) => {
    res.send('get all post response');
})

// /getall
// /update
// /delete

module.exports = router;