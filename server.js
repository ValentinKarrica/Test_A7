const express = require('express');
const app = express();
const path = require('path');
const port  = process.env.PORT || 8000

// Setting EJS as templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`APP IS LISTENING ON PORT ${port}!`)
})
app.use(express.static(__dirname + '/public'));


// index page
app.get('/', function(req, res) {
    res.render('pages/index');
  });
  
  // about page
  app.get('/about', function(req, res) {
    res.render('pages/about');
  });