const express = require("express");

const fileController = require("../Controllers/file")

const router = express.Router();

// Dummy Route
router.get("/", (req,res) => {
    res.status(200).json({
        success : true,
        message : "Code is working fine"
    })
})

// Send Mail
router.post("/send/mail", fileController.data);

module.exports = router;