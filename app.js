const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const bodyParser = require('body-parser');

app.listen(port);
console.log("Listing on port " + port);
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

