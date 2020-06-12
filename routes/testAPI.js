const express = require('express');
const router = express.Router();

//A basic API
router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

router.get('/api/test', (req, res) => {
    res.send('some data')
})

module.exports = router;