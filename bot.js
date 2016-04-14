var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),botHugs = /^\/hugs/;
      botSquad= /^\/sq/i;botStream= /^\/st/i;
    else if(request.text && botSquad.test(request.text)) {
    this.res.writeHead(200);
    var team = request.text.substring(4,9);
    if(team) {
      if (team == "col") {
        postMessage("https://www.enjore.com/en/team/494839/colorado-rapids-mark/players");
      }
      else if (team == "cc") {
        postMessage("https://www.enjore.com/en/team/494840/columbus-crew-soccer-club-will/players/");
      }
      else if (team == "dc") {
        postMessage("https://www.enjore.com/en/team/494841/d-c-united-john/players/");
      }
      else if (team == "la") {
        postMessage("https://www.enjore.com/en/team/494842/los-angeles-galaxy-david/players/");
      }
      else if (team == "mon") {
        postMessage("https://www.enjore.com/en/team/494843/montreal-impact-gershom/players/");
      }
      else if (team == "nyr") {
        postMessage("https://www.enjore.com/en/team/494844/new-york-red-bulls-johnie/players/");
      }
      else if (team == "nyc") {
        postMessage("https://www.enjore.com/en/team/494845/new-york-city-football-club-danny/players/");
      }
      else if (team == "orl") {
        postMessage("https://www.enjore.com/en/team/494846/orlando-city-soccer-club-kuako/players/");
      }
      else if (team == "sea") {
        postMessage("https://www.enjore.com/en/team/494847/seattle-sounders-football-club-dino/players/");
      }
      else if (team == "kc") {
        postMessage("https://www.enjore.com/en/team/494848/sporting-kansas-city-brooks/players/");
      }
      else if (team == "tor") {
        postMessage("https://www.enjore.com/en/team/494849/toronto-football-club-jake/players/");
      }
      else if (team == "phi") {
        postMessage("https://www.enjore.com/en/team/494850/philadelphia-union-alex/players/");
      }
      else if (team == "chi") {
        postMessage("https://www.enjore.com/en/team/494851/chicago-fire-sean/players/");
      }
      else if (team == "dal") {
        postMessage("https://www.enjore.com/en/team/494863/fc-dallas-javi/players/");
      }
      else if (team == "rsl") {
        postMessage("https://www.enjore.com/en/team/494869/real-salt-lake-tba/players/");
      }
    }
     else if(request.text && botStream.test(request.text)) {
    this.res.writeHead(200);
    var team = request.text.substring(4,9);
    if(team) {
      if (team == "col") {
        postMessage("https://www.enjore.com/en/team/494839/colorado-rapids-mark/players");
      }
      else if (team == "cc") {
        postMessage("https://www.twitch.tv/cbf1914/");
      }
      else if (team == "dc") {
        postMessage("https://www.enjore.com/en/team/494841/d-c-united-john/players/");
      }
      else if (team == "la") {
        postMessage("https://www.twitch.tv/ochoboy/");
      }
      else if (team == "mon") {
        postMessage("https://www.enjore.com/en/team/494843/montreal-impact-gershom/players/");
      }
      else if (team == "nyr") {
        postMessage("https://www.enjore.com/en/team/494844/new-york-red-bulls-johnie/players/");
      }
      else if (team == "nyc") {
        postMessage("https://www.twitch.tv/theedeerob");
      }
      else if (team == "orl") {
        postMessage("https://www.enjore.com/en/team/494846/orlando-city-soccer-club-kuako/players/");
      }
      else if (team == "sea") {
        postMessage("https://www.enjore.com/en/team/494847/seattle-sounders-football-club-dino/players/");
      }
      else if (team == "kc") {
        postMessage("https://www.enjore.com/en/team/494848/sporting-kansas-city-brooks/players/");
      }
      else if (team == "tor") {
        postMessage("https://www.enjore.com/en/team/494849/toronto-football-club-jake/players/");
      }
      else if (team == "phi") {
        postMessage("https://www.enjore.com/en/team/494850/philadelphia-union-alex/players/");
      }
      else if (team == "chi") {
        postMessage("https://www.enjore.com/en/team/494851/chicago-fire-sean/players/");
      }
      else if (team == "dal") {
        postMessage("https://www.enjore.com/en/team/494863/fc-dallas-javi/players/");
      }
      else if (team == "rsl") {
        postMessage("https://www.enjore.com/en/team/494869/real-salt-lake-tba/players/");
      }
    }
    this.res.end();
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
