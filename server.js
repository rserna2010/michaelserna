var express = require('express');
var app = express();

// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
console.log(__dirname)
app.use(express.static(__dirname + '/'));
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));


app.use(express.static('michaelserna'));

var port = process.env.PORT || 2020;

app.listen(port, function () {
  console.log('Example app listening on port 2020!');
});