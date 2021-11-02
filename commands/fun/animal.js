const request = require('request');
const fs = require('fs');
module.exports = {
  action(msg, args){
    //If args is <animal>, get api request
    /*if (args[0] = "test") {
      console.log("This command works.");
    } else */
    if (args[0] = "bird") {
      request('https://some-random-api.ml/facts/bird', function(error, response, body) {
    		if (!error && response.statusCode == 200) {
    			let fact = JSON.parse(body).fact;
    			request('http://shibe.online/api/birds', function(err, res, body_) {
    				let imageUrl = 'https://cdn.shibe.online/birds/' + JSON.parse(0);
    				msg.channel.send(`Bird fact: ${fact}`, {files: [imageUrl]});
    			});
    		}
    	});
    } else {
      console.log("This command doesn't work.");
    }
  }
}
