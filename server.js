var express = require('express');
var app = express();
var path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/whoami', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var lang = req.headers["accept-language"];
  var machine = req.headers["user-agent"];
  res.send(JSON.stringify({
    ipaddress: ip,
    language: lang,
    software: machine
  }));
});

app.listen(port, () => console.log('Listening to port ' + port));