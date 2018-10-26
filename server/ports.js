var inspector = function(){

  var get = function(req, res){

    const { spawnSync } = require( 'child_process' );
    const ls = spawnSync( 'pm2', ['list'] );
    const grep = spawnSync('egrep', ['fork|cluster'],  {
      input: ls.stdout,
      encoding:'utf8'
    });
    const pids = spawnSync('awk', ['{ print $2, $8, $14, $16, $18}'], {
      input: grep.stdout,
      encoding:'utf8'
    });
    const thenames = pids.stdout.toString('utf8');
    const ports = spawnSync('lsof', ['-i']);
    const nodeports = spawnSync('grep', ['node'], {
      input: ports.stdout,
      encoding: 'utf8'
    });
    var theapps = []
    var applines = pids.stdout.toString().split('\n');

    var lines = nodeports.stdout.toString().split('\n')

    var returnLines = [];
    lines.forEach(function(line) {
      if (line.length > 0 ) {
        var e = {
          port:line.split(/\s+/)[8].split(':')[1],
          pid: line.split(/\s+/)[1],
        }
        returnLines.push(e);
      }
    });

    applines.forEach(function(line) {
      var f = {
        app: line.split(' ')[0],
        name:line.split(' ')[0],
        pid: line.split(' ')[1],
        uptime: line.split(' ')[2],
        cpu: line.split(' ')[3],
        mem: line.split(' ')[4],
        port: returnLines.filter(function(arr){return arr.pid == line.split(' ')[1]})[0] || 'none',
      }
      theapps.push(f)
    })

    res.json({
      ports:returnLines,
      apps:theapps,
    });
  }

  return {
    get: get
  }
};

module.exports = inspector;
