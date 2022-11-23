const router = require("express").Router();

router.get('/healthz', (req, res) => {
    res.json({
        status_code: 200,
        message: 'App is healthy.'
    })
});

module.exports = router;
