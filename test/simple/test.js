var topcoatify = require('./../../index')
,   path       = require('path')
,   fs         = require('fs')
,   simple     = path.join(__dirname, 'test.css')
,   test       = require('tape')
,   expected   = fs.readFileSync(path.join(__dirname, 'expected.css')).toString()

test(function(t) {
    topcoatify([simple], {}, function(err, data) {
        if (err) t.fail(err)
        t.equal(data, expected, 'Simple import should be equal.')
        t.end()       
    })
})

