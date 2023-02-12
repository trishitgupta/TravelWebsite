var express = require('express'), app = express();

app.use(express.static('website'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});