var http = require('http'),
    fs = require('fs');
    ejs = require('./libs/ejs_production.js');

var templateString = null;
var fs = require('fs');
fs.readFile('./templates/home.ejs', function (err, template) {
    if (err) {
        throw err;
    }else{
        templateString = template;
    }

    http.createServer(function (request, response) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(ejs.render(templateString));
    }).listen(8124);
});

console.log('Server running at http://127.0.0.1:8124/');