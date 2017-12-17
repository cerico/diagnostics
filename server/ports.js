var inspector = function(){

  var get = function(req, res){

    const { spawnSync } = require( 'child_process' )
const ls = spawnSync( 'pm2', ['list'] )
const grep = spawnSync('grep', ['online'],  {
  input: ls.stdout,
  encoding:'utf8'
})
const pids = spawnSync('awk', ['{ print $2, $8 }'], {
  input: grep.stdout,
  encoding:'utf8'
})
const thenames = pids.stdout.toString('utf8')
    console.log(18)
const ports = spawnSync('lsof', ['-i'])
const nodeports = spawnSync('grep', ['node'], {
  input: ports.stdout,
  encoding: 'utf8'
})
var theapps = []
var applines = pids.stdout.toString().split('\n');

applines.forEach(function(line) {
  var f = {
    name:line.split(' ')[0],
    pid:line.split(' ')[1]
  }
  theapps.push(f)
})

var lines = nodeports.stdout.toString().split('\n')

              var returnLines = [];
              lines.forEach(function(line) {
              if (line.length > 0 ) {
                var e = {
                  port:line.split(/\s+/)[8].split(':')[1],
                  pid: line.split(/\s+/)[1]
                }
                console.log(e)
                returnLines.push(e);
              }
              });
              console.log(23)
              res.json({ports:returnLines,apps:theapps});
          }


  return {
      get: get
  }
};

module.exports = inspector;
