const express = require("express");
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/',function(req, res){
res.sendFile('/Users/wuzei/Documents/msvscode/web/index.html')
})
app.get('/*',function(req, res){
    res.sendFile('/Users/wuzei/Documents/msvscode/web'+req.url)
    })
app.post('/login',function(req, res){
    console.log(req.headers)
    res.send('登陆成功')
})

app.post('/register', function(req,res){
    console.log(req.body.realname)
    res.send('注册')
})
app.listen(80,() => {console.log('服务已启动')});