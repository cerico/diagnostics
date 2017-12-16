var inspector = function(){

  var get = function(req, res){

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
    console.log(18)
const ports = spawnSync('lsof', ['-i'])
const nodeports = spawnSync('grep', ['node'], {
  input: ports.stdout,
  encoding: 'utf8'
})
console.log(thenames)

var lines = nodeports.stdout.toString().split('\n');

              var returnLines = [];
              lines.forEach(function(line) {
      console.log(line)
              var e = {port:line.split('localhost:').pop().split(' ').shift()}
              console.log(e)
              returnLines.push(e);
              });
              console.log(23)
              res.json({ports:returnLines,apps:thenames});
          }


  return {
      get: get
  }
};

module.exports = inspector;