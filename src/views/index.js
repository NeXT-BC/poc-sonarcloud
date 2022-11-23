const router = require("express").Router();
const path = require('path');

router.get("/home", (req, res) => {
    return res.sendFile(path.join(__dirname+'/htmls/index.html'))
});

module.exports = router;
