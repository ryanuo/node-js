import requests, json

result_all = []


class Cloud:
    def __init__(self, collection_name):
        # self.collection_name = collection_name.split('/')[1]
        # self.data_json = collection_name.split('/')[0]
        self.collection_name = collection_name
        self.env = 'kccloud-7g3budm59048e071'
        # self.databaseRemove()
        # self.databaseQuery(1, 10)

    # 获取access_token的值
    def access_token(self):
        APPID = 'wx46c68434f05a3b7f'  # 小程序ID
        APPSECRET = '22a569881e681388fb91898be8f27dbe'  # 小程序秘钥
        WECHAT_URL = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + APPID + '&secret=' + APPSECRET
        response = requests.get(WECHAT_URL)
        result = response.json()
        return result["access_token"]

    # 实现插入数据到云数据库
    def databaseAdd(self):
        datas = self.getData()
        url = f'https://api.weixin.qq.com/tcb/databaseadd?access_token={self.access_token()}'
        data = {
            "env": self.env,
            "query": 'db.collection("%s").add({data:%s})' % (self.collection_name, datas)
        }
        response = requests.post(url, data=json.dumps(data))
        result = response.json()
        if result['errcode'] == 0:
            text = "插入数据库%s成功" % self.collection_name
        else:
            text = "插入数据库%s失败" % self.collection_name
        result_all.append(text)
        print(text)  # 将返回值打印

    # 删除数据库集合
    def databaseRemove(self):
        url = f'https://api.weixin.qq.com/tcb/databasedelete?access_token={self.access_token()}'
        data = {
            "env": self.env,  # 用户的数据库环境ID
            "query": "db.collection(\"" + self.collection_name + "\").where({content_img: _.exists(true)}).remove()"
        }
        response = requests.post(url, data=json.dumps(data))
        result = response.json()
        if result['errcode'] == 0:
            text = "删除数据库%s成功" % self.collection_name
        else:
            text = "删除数据库%s失败" % self.collection_name
        print(text)  # 将返回值打印
        result_all.append(text)
        self.databaseAdd()

    # 获取资讯的数据
    def getData(self):
        url = 'https://kc.mr90.top/getimg/hotjson/%s/hot.json' % self.data_json
        res = requests.get(url).json()
        return res

    # 创建数据库集合
    def databaseCollectionAdd(self):
        url = f'https://api.weixin.qq.com/tcb/databasecollectionadd?access_token={self.access_token()}'
        data = {
            "env": self.env,  # 用户的数据库环境ID
            "collection_name": self.collection_name  # 数据库集合的名称
        }
        response = requests.post(url, data=json.dumps(data))
        result = response.json()
        text = "创建数据库集合%s" % self.collection_name
        print(text)  # 将返回值打印
        result_all.append(text)
        self.databaseAdd()

    # 查询数据库
    def databaseQuery(self, num=0, page=100):
        url = f'https://api.weixin.qq.com/tcb/databasequery?access_token={self.access_token()}'
        if num == 0 and page == 100:
            sql = "db.collection(\"" + self.collection_name + "\").get()"
        else:
            sql = "db.collection(\"" + self.collection_name + "\").skip({}).limit({}).get()".format(
                (int(num) - 1) * int(page), page)
        data = {
            "env": self.env,  # 用户的数据库环境ID
            "query": sql
        }
        response = requests.post(url, data=json.dumps(data))
        print('查询成功')
        res = response.json()
        for i, n in enumerate(res['data']):
            res['data'][i] = json.loads(res['data'][i])
        if response.status_code == 200:
            return json.dumps({
                "status_code": 1,
                "list": res
            },ensure_ascii=False)
        else:
            return json.dumps({"msg": "登录失败", "status_code": -1}, ensure_ascii=False)

# if __name__ == "__main__":
#     # Cloud('baidu/demo')
#     List_name = ['baidu/bd_datas', 'zxss/zxss', 'sg/sgDatas', '360/datas_360']
#     for index, item in enumerate(List_name):
#         print(f"正在执行{item.split('/')[1]}的数据库请求")
#         print("------------------------")
#         Cloud(item)
#     print("------------------------")
#     print("数据库更新完成！！！！")
