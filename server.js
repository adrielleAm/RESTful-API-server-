var express = require('express');

var app = express();

app.listen(3000, function(){
    console.log('RESTful API server stared on 3000');
});

app.get('/', function(req, res){
    res.send("GET na Raiz! :)");
})

