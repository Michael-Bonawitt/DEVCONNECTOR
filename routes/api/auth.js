const express = require('express');
const router = express.Router();

// @route  Post api/auth
// @desc   Register User
// @access Public
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('Auth route');
});

module.exports = router;