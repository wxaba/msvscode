//01 导入 http 模块
const http = require('http');

//02 创建服务
const server = http.createServer((request, response) => {
  let {method} = request;
  let {pathname} = new URL(request.url, 'http://127.0.0.1');

  console.log(res);
  console.log(res.query.Keyword)

  response.setHeader('content-type','text/html;sharset=utf-8');
  response.end('dada'); //设置响应体，结束响应

});
//03 监听端口，启动服务
server.listen(9000, () => {
   console.log('服务已启动');
});