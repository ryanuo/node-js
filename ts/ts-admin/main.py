# 导入数据库模块
import json
# 导入Flask框架，这个框架可以快捷地实现了一个WSGI应用
from flask import Flask
# 默认情况下，flask在程序文件夹中的templates子文件夹中寻找模块
from flask import render_template
# 导入前台请求的request模块
from flask import request
from werkzeug.datastructures import ImmutableMultiDict

from connect import MysqlHelper
from cloud.db_config import Cloud

# import traceback
# 传递根目录
app = Flask(__name__, template_folder='templates', static_folder='')
self = {
    'host': 'localhost',
    'port': 3306,
    'db': 'wxmydb',
    'user': 'root',
    'password': "root123",
    'charset': 'utf8'
}


# 默认路径访问登录页面
@app.route('/')
def index():
    return render_template('index.html')


# 请求api地址的定义
# 登录的地址
@app.route('/api', methods=['POST', 'GET'])
def api_list():
    if request.method == 'GET':
        email = request.args.get('email')
        psw = request.args.get('password')
        sql = "SELECT * FROM db_user WHERE email=%s and password=%s"
        status = MysqlHelper(self).cud(sql, [email, psw])
        if status['status_code'] == 1:
            data_res = {
                "msg": "登录成功",
                "status_code": status['status_code'],
                "data": {
                    "user_id": status['data'][0],
                    "username": status['data'][1],
                    "email": status['data'][3],
                    "sex": status['data'][4],
                    "role": status['data'][6],
                    "create_time": str(status['data'][5])
                }
            }
            return json.dumps(data_res, ensure_ascii=False)
        else:
            return json.dumps({"msg": "登录失败", "status_code": -1}, ensure_ascii=False)
    elif request.method == 'POST':
        return json.dumps({"msg": "当前为Post请求", "status_code": 2}, ensure_ascii=False)


# 获取新闻数据
@app.route('/news', methods=['POST', "GET"])
def news_list():
    if request.method == 'GET':
        key = request.args.get('key')
        pagesize = request.args.get('pagesize')
        pagenum = request.args.get('pagenum')
        if not key:
            return json.dumps({"msg": '参数有误', "status_code": -1})
        # print(ImmutableMultiDict(request.args).to_dict())
        return Cloud(key).databaseQuery(pagenum, pagesize)
    elif request.method == 'POST':
        return json.dumps({"msg": "当前为Post请求", "status_code": 2}, ensure_ascii=False)


# 积分展示
@app.route('/rank', methods=['POST', "GET"])
def rank_():
    if request.method == 'GET':
        s = request.args.get('key')
        if s == 'rank':
            key = 'rank_sort'
        pagesize = request.args.get('pagesize')
        pagenum = request.args.get('pagenum')
        if not key:
            return json.dumps({"msg": '参数有误', "status_code": -1})
        # print(ImmutableMultiDict(request.args).to_dict())
        return Cloud(key).databaseQuery(pagenum, pagesize)
    elif request.method == 'POST':
        return json.dumps({"msg": "当前为Post请求", "status_code": 2}, ensure_ascii=False)


# 登录请求
@app.route('/login', methods=['POST', 'GET'])
def login_user():
    # 查询数据库
    return json.dumps({"msg": "登录成功", "status_code": 1})


# 按间距中的绿色按钮以运行脚本。
if __name__ == '__main__':
    app.run(debug=True)