'use strict';
const express = require('express');
const server = express();
const PORT= process.env.PORT || 5505;
server.get ('/test', (request, response)=>{
    response.send('working!!!');

});
server.get('/cats', (request, response)=>{
    let cats =[
        {name:'sherry'},
        {name:'franki'},
        {name:'newton'}]
        response.send(cats);
});
server.listen(PORT,()=>{
    console.log("listen on port 5500");
});
server.use(express.static('./public'));