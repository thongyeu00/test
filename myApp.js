const express = require('express');
const app = express();
// Add your code below this line
var helmet = require('helmet');
// Add your code above this line

// Do not change or delete the code below this line
module.exports = app;
// Do not change or delete the code above this line













































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
