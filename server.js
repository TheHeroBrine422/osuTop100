// install: npm install express axios
// options/info
port = 3002

// require libraries
const express = require('express')
const axios = require('axios')
const fs = require('fs')

// setup clients
const app = express();

app.get('/osuTop100/api', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  output = "error: something went wrong on the server. Check server log"

  osuid = req.query.id
  console.log("/osuTop100/api id: "+osuid)

  axios.get('https://osu.ppy.sh/users/'+osuid+'/scores/best?mode=mania&offset=0&limit=50')
  .then(function (response) {
    output = response.data

    axios.get('https://osu.ppy.sh/users/'+osuid+'/scores/best?mode=mania&offset=50&limit=50')
      .then(function (response) {
        for (var i = 0; i < response.data.length; i++) {
          output.push(response.data[i])
        }
      })
      .catch(function (error) {
        console.log(error)
      })
      .then(function () {
        res.send(JSON.stringify(output))
      })
  })
  .catch(function (error) {
    console.log(error)
  })
});

app.get('/osuTop100/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("/osuTop100/")
    res.send(data)
  });
});

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  fs.readFile('index.html', 'utf8', (err, data) => {
    if (err) throw err;
    console.log("/")
    res.send(data)
  });
});

app.listen(port, () => {
  console.log('server started at localhost:'+port);
});
