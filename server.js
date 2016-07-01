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

app.listen(2020, function () {
  console.log('Example app listening on port 2020!');
});