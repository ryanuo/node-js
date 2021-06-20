## 研究课题

>新闻文本分类算法

1. 开发环境 - node.js,mongodb
2. 开发语言 - python和web语言
3. 运行环境 - windows（或者Linux）
4. 使用软件 - pycharm

## 实验原理

1. 基于网页语言，实现前后端交互
2. (可视化界面)使用python爬虫爬取新闻页面数据信息导入到`excel`文件中，并将其格式转换为`csv`格式（便于导入到数据库中）
3. 在前台实现`csv`数据上传,并作出判断（有错误提示），格式要求必须为csv，严格按照测试数据的格式
4. 实现新闻文本 标题 内容的检索，并返回相应的数据（正则）


## 文件介绍

1. `App_project`为项目源码文件
2. `app_node` 为node.js文件，前后端交互源码
3. `python` 文件为第二种呈现方式，要求`app_node`文件已经全部配置完成
- `pc.py`文件为python可视化面版（爬虫+tkinter）
- `tran.py`文件为excel文件转换csv格式文件的程序

## 前期准备

- 需要安装好环境（mongodb，和node.js）

## mongodb的配置

1. 设置`mongo`的环境变量
2. 开启mongodb服务 `net start mongodb` 关闭使用`net stop mongodb`
3. 命令行 输入 `mongo` 必须添加好环境变量
4. 切换到`admin`数据库 命令行输入`use admin`
5. 创建超级管理员账号 `db.createUser({user:'root',pwd:'root',roles:['root']})`
6. 切换到blog（自定义）数据`user blog`
7. 创建普通账号 `db.createUser({user:'xxxx',pwd:'xxxx',roles:['readWrite']})`
8. 连接数据库 使用 `mongodb://普通用户名:用户名密码@localhost:端口号/要连接数据库名称`

注意：配置完成后修改`app_node`文件中的`config文件`下的`default.json`配置信息

## node.js的配置

1. 安装好node.js环境后，将需要的模板信息使用`npm i`命令下载
2. 注意配置config中`default.json`配置信息
3. 打开`App_project`文件 命令行输入 `node app.js`
4. 命令行显示 `网站服务器启动成功` `数据库连接成功` 说明配置已完成
5. 打开网页 地址栏输入 `http://localhost/search/` (确保本地80端口未被监听)

## python文件

1. 打开python文件，安装好需要的库
2. 如果数据在excel文件下，可以使用`python`文件下的`tran.py`转换格式为`csv`