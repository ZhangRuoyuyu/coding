var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>学生成绩判断</title></head>' +
  '<body>' +
  '<form method="post">' +
  '学生名：<input name="name"><br>' +
  '成绩： <input name="score"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.score) { 
       if(0<=body.score&&body.score<60)
       {
       res.write(body.name+'-'+"不及格")
       }
          else if(60<=body.score&&body.score<85)
        {
       res.write(body.name+'-'+"及格")
        }
          else if(85<=body.score&&body.score<90){
       res.write(body.name+'-'+"良好")
      }
          else if(90<=body.score&&body.score<=100){
       res.write(body.name+'-'+"优秀")
      }
          else if(body.score<0||body.score>100) {
      res.write("您的输入有误，请重新输入")
    } 
    }
    else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
  });
}).listen(8080);
