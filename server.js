var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
    res.render('login');
});

app.get('/login', function(req, res){
    res.render('login');
});

app.get('/logged', function(req, res){
    res.render('logged', {
        user: req.query.login
    });
});

app.listen(3000, function() {
    console.log('Aplikacja nasłuchuje porcie 3000');
});
app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});