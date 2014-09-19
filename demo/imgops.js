var fs = require('fs')
var data = 'data:image/png;base64, ';

fs.readFile('./baboon.png', function(err, data) {
   var base64data = new Buffer(data).toString('base64');
    console.log(data + base64data)
});


