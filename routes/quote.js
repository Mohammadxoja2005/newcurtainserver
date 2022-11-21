const express = require("express");
const router = express.Router();
const { Quote } = require("../models");

router.get("/", async (req,res) => {
    const quotes = await Quote.findAll(); 
    res.json(quotes);
}) 

router.post("/", async (req, res) => {
    const quote = req.body; 
    await Quote.create(quote); 
    
    res.json(quote); 
});

module.exports = router;
