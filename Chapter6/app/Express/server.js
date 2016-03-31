var express = require("express"),
http = require("http"),
app;
// and have it listen on port 3000
app = express();
// set up a static file directory to use for default routing
// also see the note below about Windows
app.use(express.static(__dirname + "/client"));
// Create our Express-powered HTTP server
http.createServer(app).listen(3000);
// set up our routes
app.get("/hello", function (req, res) {
res.send("Hello World!");
});
app.get("/goodbye", function (req, res) {
res.send("Goodbye World!");
});
app.get("/", function (req, res) {
res.send("This is the root route!");
});
app.get("/index.html", function (req, res) {
res.send("<html><head></head><body><h1>Hello World!</h1></body></html>");
});