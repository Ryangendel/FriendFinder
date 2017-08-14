// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
var personalityScoreJSON = require ("/app/data/friendscore");

module.exports = function(app){
    app.get("/api/friends", function (req, res){
        res.json(personalityScoreJSON);
    });
    app.post("/api/friends", function (req, res){
        
        for(var i = 0; i < array1.length; i++){
            sum.push(array1[i] + array2[i]);
    });
};

// * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic