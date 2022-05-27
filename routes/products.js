const express = require('express');
const router = express.Router();
const productSchema = require('../models/product')


router.get('/',(req,res) => {
    res.send('products');

});

module.exports = router;