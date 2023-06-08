const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/test', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    res.status(200).json({
        email, password
    });
})

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;