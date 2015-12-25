# clickable grid

## 使用方法
- 使用如下命令行，把myBranchName替换成你自己的github的用户名
```
git clone git@github.com:qianxueseng-com/js-projects.git
cd js-projects
git checkout -b 'myBranchName'
```

## 基本要求
- 可以使用jQuery
- 请生成一个n x n的格子，每个格子里面显示一个数字，从1到n^2为止。
- 当点击每个格子的时候，都用console.log打印出当前格子的数字。

## 额外要求
- css使用flexbox
- js使用event delegation


说明 
jq:
<script src="//cdn.bootcss.com/jquery/1.9.1/jquery.min.js"></script>

flexbox语法：
.wrap{
	display:box;
}
.inner{
	-moz-box-flex:1.0; /* Firefox */
	-webkit-box-flex:1.0; /* Safari 和 Chrome */
	box-flex:1.0;
	border:1px solid red;
}

event delegation 用法：

$("#name").delegate('td','click',fn);
