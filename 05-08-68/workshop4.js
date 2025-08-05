"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("http");
var url_1 = require("url");
var PORT = 8888;
var server = (0, http_1.createServer)(function (req, res) {
    var parsedUrl = (0, url_1.parse)(req.url || '', true);
    var pathname = parsedUrl.pathname;
    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end("\n      <h2>Multiplication</h2>\n      <form action=\"/next\" method=\"GET\">\n        <input type=\"number\" name=\"num1\" required>\n        <input type=\"number\" name=\"num2\" required>\n        <button type=\"submit\">Submit</button>\n      </form>\n      <hr>\n    ");
    }
    else if (pathname === '/next') {
        var _a = parsedUrl.query, num1 = _a.num1, num2 = _a.num2;
        var n1 = Number(num1);
        var n2 = Number(num2);
        var resultHtml = '<h2>Result</h2><ul>';
        for (var i = 1; i <= n2; i++) {
            resultHtml += "<li>".concat(n1, " x ").concat(i, " = ").concat(n1 * i, "</li>");
        }
        resultHtml += '</ul><a href="/">Back</a>';
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(resultHtml);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h2>404 Not Found</h2>');
    }
});
server.listen(PORT, function () {
    console.log("Server is running at http://localhost:".concat(PORT));
});
