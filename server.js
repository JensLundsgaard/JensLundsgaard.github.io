var express = require('express');
var app = express();



// Set the MIME type explicitly
// express.static.mime.define({'application/wasm': ['wasm']});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
    });

// app.get('/wasm_beginner_bg.wasm', (req, res) => {
//     res.sendFile(__dirname + '/wasm_beginner_bg.wasm');
// })

app.get('/:id', (req, res) => {
    res.sendFile(__dirname + '/' + req.params.id);
})

app.get('/pages/:id', (req, res) => {
    res.sendFile(__dirname + '/pages/' + req.params.id);
})

app.listen(3000);