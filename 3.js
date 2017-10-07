//建立对象数组
var arr = [{name: '学生甲', score: 92}, {name: '学生乙', score:67 },
           {name: '学生丙', score: 78 },{name: '学生丁', score:45 },
           {name: '学生戊', score: 88 }];
//用sort作比较
var compare = function (a,b) {
    return a.score - b.score
}
arr.sort(compare);
//按照格式输出
arr.forEach(e=>console.log(e.name+-+e.score))
