const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(path.dirname(__dirname),'web')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/login',(req, res)=>{
    res.sendFile(path.join(path.dirname(__dirname),'web','login.html'))
});

app.post('/login',(req, res)=>{
    res.send(req.body);
    console.log(typeof req.body);
    console.log(req.body);
});

app.listen(80,() => {console.log('服务已启动')});