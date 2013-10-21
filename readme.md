# Topcoatify!

Bundle a custom build of Topcoat from npm.

# Install

    npm install -g topcoatify

# Commandline

    topcoatify path/to/some/entry.css > bundled.css

# Usage as a library

    var topcoatify = require('topcoatify')
    ,   inFiles    = ['path/to/some/entry.css']
    ,   opts       = {}

    topcoatify(inFiles, opts, function(err, data) {
        if (err) throw(err)
        process.stdout.write(data)    
    })

# Grunt task

    coming soon!
