var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),botHugs = /^\/hugs/;
      botSquad= /^\/sq/i;botRegex = /^\/cool guy/; botRegexDLRecAvg = /^\/rec avg/;  botRegexDL = /^\/DDL/i;botCga = /^\/cga/;botRegexRules = /^\/rules/
      botRegexApp=/^\/app/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botTable = /^\/table/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/usopen/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/; botGoldenBoot = /^\/goldenboot/; botSf = /^\/sf/;  botSd = /^\/sd/;  botDRAFT = /^\/draft/; botSteve = /^\/steve/;
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    if(!request.text.substring(5,8)) {
      postMessage("https://www.daddyleagues.com/FBOS53/schedules");
    } else {
      postMessage("http://daddyleagues.com/FBOS53/team/"+request.text.substring(5,8)+"/schedule");
    }
    this.res.end();
  }
    else if (request.text && botDRAFT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1RLt5e2PMHEOoVij3S4b1Y7CYzqpw6bTsfGdP8-ACQoY/pubhtml");
    this.res.end();
  }
  else if (request.text && botSd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/buNql4M.png");
    this.res.end();
  }
  else if (request.text && botSf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://viralicious.co/wp-content/uploads/2015/10/short-funny-lawyer-jokes.png");
    this.res.end();
  }
  else if (request.text && botGoldenBoot.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.enjore.com/en/score/96794/fil-usa-season-3/");
    this.res.end();
    
  }
  else if (request.text && botRegexDLRecAvg.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.daddyleagues.com/FBOS53/stats/player/receiving?sortby=avg");
    this.res.end();
  }
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/FBOS53/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botCga.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://hawkshoop.com/wp-content/uploads/2013/01/siren.gif");
    this.res.end();
  } 
  else if(request.text && botRegexApp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.surveymonkey.com/r/C3KLWVQ");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1Ix1ZRaLNeGR7ZVWenUfjZAkUgCXRvpdto6EulWO9DFc/pub");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/FBOS53/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.enjore.com/en/calendar/96865/round-a/");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botTable.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://www.enjore.com/en/teamtable/96794/fil-usa-season-3/");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  else if(request.text && botHugs.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/377x210.gif.763efc977cec43ca89a14158953e923a");
    this.res.end();
  }
  else if(request.text && botSteve.test(request.text)) {
    this.res.writeHead(200);
    postMessage("You Disgusting Fuck");
    this.res.end();
  }
    else if(request.text && botSquad.test(request.text)) {
    this.res.writeHead(200);
    var team = request.text.substring(4,9);
    if(team) {
      if (team == "col") {
        postMessage("https://www.enjore.com/en/team/506265/colorado-rapids-sean/players/");
      }
      else if (team == "cc") {
        postMessage("https://www.enjore.com/en/team/494840/columbus-crew-soccer-club-will/players/");
      }
      else if (team == "dc") {
        postMessage("https://www.enjore.com/en/team/506271/d-c-united-edgar/players/");
      }
      else if (team == "la") {
        postMessage("https://www.enjore.com/en/team/506275/los-angeles-galaxy-will/players/");
      }
      else if (team == "mon") {
        postMessage("https://www.enjore.com/en/team/506277/montreal-impact-kuako/players");
      }
      else if (team == "nyr") {
        postMessage("https://www.enjore.com/en/team/494844/new-york-red-bulls-johnie/players/");
      }
      else if (team == "por") {
        postMessage("https://www.enjore.com/en/team/506302/portland-timbers-danny/players/");
      }
      else if (team == "orl") {
        postMessage("https://www.enjore.com/en/team/506281/orlando-city-soccer-club-phill/players/");
      }
      else if (team == "sea") {
        postMessage("https://www.enjore.com/en/team/506289/seattle-sounders-football-club-mark/players/");
      }
      else if (team == "kc") {
        postMessage("https://www.enjore.com/en/team/494848/sporting-kansas-city-phill/players/");
      }
      else if (team == "tor") {
        postMessage("https://www.enjore.com/en/team/506285/toronto-football-club-javi/players/");
      }
      else if (team == "phi") {
        postMessage("https://www.enjore.com/en/team/506286/philadelphia-union-jake/players/");
      }
      else if (team == "chi") {
        postMessage("https://www.enjore.com/en/team/506264/chicago-fire-johnie/");
      }
      else if (team == "dal") {
        postMessage("https://www.enjore.com/en/team/494863/fc-dallas-javi/players/");
      }
       else if (team == "van") {
        postMessage("https://www.enjore.com/en/team/506298/vancouver-whitecaps-shane/players/");
      }
       else if (team == "sj") {
        postMessage("https://www.enjore.com/en/team/506299/san-jose-earthquakes-xavi/players/");
      }
       else if (team == "hou") {
        postMessage("https://www.enjore.com/en/team/506300/houston-dynamo-gersh/players/");
      }
      else if (team == "ne") {
        postMessage("https://www.enjore.com/en/team/506301/new-england-revolution-david/players/");
      }
      else if (team == "rsl") {
        postMessage("https://www.enjore.com/en/team/494869/real-salt-lake-xavi/players/");
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
