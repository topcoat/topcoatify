var topcoatify = require('./../../index')
,   path       = require('path')
,   fs         = require('fs')
,   cssmin     = require('cssmin')
,   button     = path.join(__dirname, 'test.css')
,   test       = require('tape')
,   longPath   = path.join(__dirname, '..', '..', 'node_modules', 'topcoat-button', 'css', 'topcoat-button-mobile-dark.css')
,   expected   = cssmin(fs.readFileSync(longPath).toString())

test(function(t) {
    topcoatify([button], {}, function(err, data) {
        if (err) t.fail(err)
        t.equal(cssmin(data), expected, 'Topcoat button import should equal Topcoat button compiled.')
        t.end()       
    })
})

