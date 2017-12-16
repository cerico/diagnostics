var path = require('path');
var express = require('express');
var process = require('child_process');

var app = express();

var port=59004

app.get('/bundle/bundle.js', function(req,res){
  res.sendFile(path.join(__dirname, 'dist', 'bundle', 'bundle.js'));
})

app.get('/public/*', function(req,res){
  res.sendFile(path.join(__dirname, 'dist', 'public', req.params[0]));
})

app.get('/pids', function(req, res) {
console.log('pids')
  const { spawnSync } = require( 'child_process' )
  const ls = spawnSync( 'pm2', ['list'] )
  const grep = spawnSync('grep', ['online'],  {
    input: ls.stdout,
    encoding:'utf8'
  })
  const pids = spawnSync('awk', ['{ print $2, ":on pid ",  $8 }'], {
    input: grep.stdout,
    encoding:'utf8'
  })
  const thenames = pids.stdout.toString('utf8')

  res.writeHead(200,{'content-type':'text/html'});
  res.end(thenames);
});

app.get('/ports', function(req, res) {
  const { spawnSync } = require( 'child_process' )
  const ports = spawnSync('lsof', ['-i'])
  const nodeports = spawnSync('grep', ['node'], {
    input: ports.stdout,
    encoding: 'utf8'
  })
  const theports = nodeports.stdout.toString('utf8')

  res.writeHead(200,{'content-type':'text/html'});
  res.end(theports);
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });

app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at ' + port);
})
