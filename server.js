var express = require('express'),
    server = express(),
    ejs = require('ejs'),
    expressEjsLayouts = require('express-ejs-layouts'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

server.set('view engine', 'ejs');
server.set('veiws', './views');

server.use(express.static('./public'));
server.use(expressEjsLayouts);

server.get('/welcome', function (req, res){
  res.render('welcome');
});

server.listen(3000, function (){
  console.log("server running");
})
