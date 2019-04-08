
var https = require('https');

module.exports = function getHTML (options, callback) {

   /* Add your code here */
  // notice that https.get takes a callback with one parameter -
  // response, which is a Stream that represents the HTTP response
  https.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  var result = '';
  response.on('data', function (data) {
    result += data;
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    callback (result);
    console.log('Response stream complete.');
  });

});

};



