const express = require("express");
const path = require('path');
const app = express();

const rootPath = path.dirname(__dirname);

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/static',express.static(path.join(rootPath,'puclic')));

app.get('/',function(req, res){
    res.sendFile(path.join(rootPath,'pages','index.html'));
})
app.get('/*',function(req, res){
    console.log(req.url)
    console.log(req.path)
    res.sendFile(path.join(rootPath,req.path))
    })
app.post('/login',function(req, res){
    console.log(req.headers)
    res.send('登陆成功')
})

app.post('/register', function(req,res){
    console.log(req.body)
    res.send('注册')
})

app.all('*',(req, res)=>{
    res.sendFile(path.join(webPath,'pages','NotFound.html'))
})
app.listen(80,() => {console.log('服务已启动')});