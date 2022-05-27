const express = require('express');
const router = express.Router();
const productSchema = require('../models/product')


router.get('/',(req,res) => {
    res.send('products');

});

router.post('/',(req,res) => {

})

router.put('/',(req,res) => {

})

router.delete('/',(req,res) => {

})

module.exports = router;