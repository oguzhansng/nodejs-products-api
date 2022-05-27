const express = require('express');
const productRouter = require('./routes/products');
const app = express();

app.use('/products',productRouter);

app.listen(2000, () => {
    console.log('Server 2000  portunda çalışıyor');

});

app.get ('/',(req,res) => {
    res.send('Test');

})