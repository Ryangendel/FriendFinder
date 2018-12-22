

// Your apiRoutes.js file should contain two routes:
var friendsData = require("../app/data/friends");


module.exports = function (app) {
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    // Displays all characters
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });

    // A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    // Create New friends - takes in JSON input
    app.post("/api/friends", function (req, res) {
        //push new friend object into array, this is working
        let newFriend = req.body
        let bestFriend;
        let currentLowestDifference = 1000;
        //turns array of strings to array of numbers
        let newFriendScore = newFriend.scores.map(Number);
        newFriend.scores = newFriendScore;
        //loop to go through all current friends score
        for (let i = 0; i < friendsData.length; i++) {
            //compare current person to new person
            compareScore = friendsData[i].scores;
            // loop through each score
            let totalDifference = 0;
            for (let j = 0; j < newFriendScore.length; j++) {
                //compare new person to current person
                if (newFriendScore[j] !== compareScore[j]) {
                    let numA = newFriendScore[j];
                    let numB = compareScore[j];

                    //returns no negatives
                    totalDifference += Math.abs(numA - numB);
                }
            }

            //is current person best so far?
            if (totalDifference < currentLowestDifference) {
                //new best friend
                bestFriend = friendsData[i];
                currentLowestDifference = totalDifference;
            }

        }
        friendsData.push(newFriend);


        console.log("friendsData: ", friendsData)
        console.log('Best friend', bestFriend)
        res.send(bestFriend);
    });
}


