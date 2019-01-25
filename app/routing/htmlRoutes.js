//Requiring to use the path package 

var path = require("path");

module.exports = function(app) {
  //Route that goes to home page 
  app.get("/", function (req, res) {
   
    res.sendFile(path.join(__dirname, "../public/home.html"));
});


//Route that goes to the survey 
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"))
});


};

