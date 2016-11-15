var express = require('express')
var app = express()

var React = require('react')
var ReactEngine = require('express-react-engine');

require('babel-core/register')({
    presets: ['es2015', 'react']
})

var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();

app.use(function(req, res, next) {
    global.navigator = {
        userAgent: req.headers['user-agent']
    }
    next();
});


app.set('views', __dirname + '/components');
app.engine('jsx', ReactEngine(/*{wrapper: 'html.jsx'}*/));



app.set('port', process.env.PORT || 3000);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.render('main.jsx', { foo: 'bar' });
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port: '+app.get('port'))
})
