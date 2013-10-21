var npmcss = require('npm-css')
,   fs     = require('fs')
,   path   = require('path')

module.exports = function(inFiles, options, callback) {
    
    var err = []
    ,   out = []
     
    // validate existance of inFiles
    inFiles.forEach(function(entryFilePath) {
        if (!fs.existsSync(entryFilePath)) {
            err.push('File not found: ' + entryFilePath)      
        }
    })

    if (err.length) {
        callback(err.join("\n"), null)
        return;
    }
    
    // process and concat all inFiles
    inFiles.forEach(function(entryFilePath) { 
        var css = npmcss(entryFilePath)
        out.push(css)
    })

    callback(null, out.join(''))
} 
