
//Variable for friends information 
var friendData = require("../data/friends.js");





module.exports = function(app) {

 
app.get("/api/friends", function (req, res) {

 //Returns data as json   
res.json(friendData);
 });
    
   
 
app.post("/api/friends", function (req, res) {
    console.log("you hit api/friends")
    //pushes data into the object of arrays
    friendData.push(req.body)
    console.log(friendData)    
    });
        
  
};

