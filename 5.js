var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
'<html>'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; charset=utf-8">'+
'<title>学生成绩</title>'+
'</head>'+
'<body>'+
'<form  method="post" action="save.php">'+
   ' <label for="myName">姓名：</label>'+
    '<input type="text" value=" " name="myName " />'+
    '<input type="submit" value="提交" name="submitBtn" />'+
'</form>'+
'</body>'+
'</html>';
