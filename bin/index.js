#! /usr/bin/env node
var topcoatify = require('./../index')
,   args       = require('optimist').argv
,   out        = args.outfile || args.o || 'stdout'
,   debug      = args.debug || args.d || false
,   showHelp   = args._.length === 0 || args.h || args.help
,   path       = require('path')
,   fs         = require('fs')
,   inFiles    = args._

// defaults

// help when we can 
if (showHelp) {
    console.log(fs.readFileSync(path.join(__dirname, 'help.txt')).toString())
    process.exit(0)
}

// otherwise rock out
topcoatify(inFiles, {debug:debug}, function(err, data) {
    
    // topcoat error, get out of here
    if (err) {
        console.error(err)
        process.exit(1)
    }

    // write to stdout
    if (out === 'stdout') {
        process.stdout.write(data)
        process.exit(0)
    }

    // if we made it this far we just write to the filename supplied by -o, or --output
    fs.writeFileSync(out, data)
    process.exit(0)
})    
