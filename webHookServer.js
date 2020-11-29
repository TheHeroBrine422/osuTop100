// install: npm install express body-parser
// options/info
port = 40000

// require libraries
const express = require('express')
const bodyParser = require("body-parser");
const fs = require('fs')
const { exec } = require("child_process");

// setup clients
const app = express();

// bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.post('/osuTop100Webhook', (req, res) => {
  console.log("git push recieved. msg: " + req.body.head_commit.message + " id: " + req.body.head_commit.id)
  res.status(200).end()
  exec("/usr/bin/git --git-dir=/home/caleb/osuTop100/.git --work-tree=/home/caleb/osuTop100 pull >> /tmp/git_pull.log 2>&1", (error, stdout, stderr) => {
      if (error) {
          console.log(`error: ${error.message}`);
          return;
      }
      if (stderr) {
          console.log(`stderr: ${stderr}`);
          return;
      }
      console.log(`stdout: ${stdout}`);
  });
});

app.listen(port, () => {
  console.log('server started at localhost:'+port);
});
