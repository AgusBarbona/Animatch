const express = require('express');
const router = express.Router();

router.get('/api/ejemplo', (req, res) => {
    res.json({mensaje: 'te habla tu backend'});
});

module.exports = router;
