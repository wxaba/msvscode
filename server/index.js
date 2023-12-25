const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(path.dirname(__dirname),'web')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/login',(req, res)=>{
    res.sendFile(path.join(path.dirname(__dirname),'web','login.html'))
});

/*实现oa 账号*/
app.post('/login',(req, res)=>{
    console.log(req.body.UNAME);
    console.log(req.body.PASSWORD);
    const form = new FormData();
    form.append("UNAME",req.body.UNAME);
    form.append("PASSWORD",req.body.PASSWORD);
    form.append("encode_type",1);
    fetch('http://www.crcegsh.com/logincheck.php',{
        method:'post',
        body:form
    }).then((response) => {
        return response.text();
    }).then((response) =>{
        if(response.length == 1782){
            res.sendFile(path.join(path.dirname(__dirname),'web','index.html'))
        }else{
            res.send('密码错误');
        }
    })
});


app.listen(80,() => {console.log('服务已启动')});