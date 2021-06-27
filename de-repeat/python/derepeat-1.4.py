import hashlib, random, pyperclip, requests, webbrowser, os
import json
import tkinter.font as tf
import tkinter.messagebox
from tkinter import *  # 使用Tkinter前需要先导入

'''
tkinter版本论文降重
'''


class Repeat:
    def __init__(self):
        self.transList = {
            "simple": ["zh-en", "en-de", "de-zh"],
            "middle": ["zh-en", "en-de", "de-jp", "jp-pt", "pt-zh"],
            "high": [
                "zh-en",
                "en-de",
                "de-jp",
                "jp-pt",
                "pt-it",
                "it-pl",
                "pl-bul",
                "bul-est",
                "est-zh",
            ],
        }

    # 执行函数
    def run(self):
        appid = t1.get()
        key = t2.get()
        if iv_default.get() == 0:
            lan_s = self.transList['simple']
        elif iv_default.get() == 1:
            lan_s = self.transList['middle']
        else:
            lan_s = self.transList['high']
        q = la3.get("1.0", "end")
        if len(appid) == 0 or len(key) == 0 or len(q) <= 1:
            tkinter.messagebox.showinfo(title='提示', message='Appid或者key或者转换的值不能为空')
            return
        url = 'https://api.fanyi.baidu.com/api/trans/vip/translate'
        salt = random.randint(1, 65536)
        for i in range(0, len(lan_s)):
            sign = hashlib.md5((str(appid) + str(q) + str(salt) + str(key)).encode('utf-8')).hexdigest()
            params = {
                'from': lan_s[i].split('-')[0],
                'to': lan_s[i].split('-')[1],
                'salt': salt,
                'sign': sign,
                'appid': appid,
                'q': q
            }
            r = requests.get(url, params=params)
            txt = r.json()
            try:
                print(txt['trans_result'][0]['dst'])
                q = txt['trans_result'][0]['dst']
            except:
                tkinter.messagebox.showinfo(title='提示', message='Appid或者key输入有误')
                return
        la2.delete(1.0, 'end')
        la2.insert('insert', q)

    # 设置清空按钮
    def delete_text(self):
        la2.delete(1.0, 'end')
        la3.delete(1.0, 'end')

    def open_url(self, event):
        webbrowser.open("https://u.mr90.top/posts/644213/", new=0)

    def copy_s(self):
        text = la2.get(1.0, "end")
        if len(text) > 1:
            pyperclip.copy(la2.get(1.0, "end"))
            tkinter.messagebox.showinfo(title='提示', message='复制成功')
        else:
            tkinter.messagebox.showinfo(title='提示', message='文本框为空!!')

    # 读取文件信息
    def read_config(self):
        # 读取文件
        flie_name = os.getcwd()+ '\\config\\config.json'
        with open(flie_name) as f:
            list_secret = json.load(f)
            if len(list_secret['appid']) != 0 or len(list_secret['key']) != 0:
                default_appid_value = list_secret['appid']
                default_key_value = list_secret['key']
                f.close()
                return [default_appid_value, default_key_value]
            else:
                tkinter.messagebox.showinfo(title='提示', message='请输入appid和key,获取方法点击底部蓝字!!')
                f.close()
                return ['点击打开配置文件', '填写appid和key值']
    # 打开配置文件
    def open_file(self):
        path = 'config'
        os.startfile(path)
    # 填写配置信息
    def write_config(self):
        config_json = {
            "appid": t1.get(),
            "key": t2.get()
        }
        with open('config/config.json','w+',encoding="utf-8") as f:
            f.write(json.dumps(config_json, ensure_ascii=False))
        tkinter.messagebox.showinfo(title='提示', message='更新appid和key值成功')


if __name__ == "__main__":
    window = Tk()
    # 设置window窗口标题
    window.title('论文降重v1.4 @Harry')
    # 设置窗口的长度和宽度
    window.geometry('720x500')
    # 绘制窗口内容
    iv_default = IntVar()
    iv_default.set(0)
    # appid+key
    # 设置appid和key默认值
    config_value = Repeat().read_config()
    default_value_appid = StringVar()
    default_key_appid = StringVar()
    default_value_appid.set(config_value[0])
    default_key_appid.set(config_value[1])
    rb_appid_Label = Label(window, text='appid:')
    rb_key_Label = Label(window, text='key:')
    t1 = Entry(window, show=None, textvariable=default_value_appid, bg='#F0FFF0', width=20)
    t2 = Entry(window, show=None, textvariable=default_key_appid, bg='#F0FFF0', width=20)
    # 填写appid
    add_config = Button(window, text='更新配置文件', foreground='red', font=('Arial', 10), width=10, height=1,
                        command=Repeat().write_config)
    open_config = Button(window, text='打开配置文件', foreground='red', font=('Arial', 10), width=10, height=1,
                        command=Repeat().open_file)
    rb_appid_Label.place(x=230, y=13)
    rb_key_Label.place(x=440,y=13)
    add_config.grid(row=1,column=1, pady=10)
    open_config.place(x=120,y=10)
    t1.place(x=280,y=13)
    t2.place(x=480,y=13)
    # 选择降重等级
    rb_default_Label = Label(window, text='选择降重等级：')
    rb_default1 = Radiobutton(window, text='简单', value=0, variable=iv_default)
    rb_default2 = Radiobutton(window, text='中等', value=1, variable=iv_default)
    rb_default3 = Radiobutton(window, text='高等', value=2, variable=iv_default)
    rb_default_Label.grid(row=2, column=1, pady=10, padx=20, sticky="E")
    rb_default1.grid(row=2, column=2, padx=30, pady=4)
    rb_default2.grid(row=2, column=3, padx=30, pady=4)
    rb_default3.grid(row=2, column=4, padx=30, pady=4)
    # 填写降重的段落
    rb_article_Label = Label(window, text='输入降重文章：')
    la3 = Text(window, bg='#98FB98', fg='black', font=('Arial', 12), width=50, height=6)
    rb_article_Label.grid(row=3, column=1, sticky="E", pady=10, padx=20)
    la3.grid(row=3, column=2, columnspan=4, ipadx=40, ipady=10)
    # 降重结果
    rb_result_Label = Label(window, text='降重结果：')
    la2 = Text(window, bg='#98FB98', fg='black', font=('Arial', 12), width=50, height=6)
    rb_result_Label.grid(row=4, column=1, sticky="E", pady=10, padx=20)
    la2.grid(row=4, column=2, columnspan=4, ipadx=40, ipady=10,pady=10)
    # 执行
    starts = Button(window, text='立即执行', font=('Arial', 12), width=10, height=1, command=Repeat().run)
    starts.grid(row=5, column=1, columnspan=3)
    # 清空
    clear = Button(window, text='清空', font=('Arial', 12), width=10, height=1, command=Repeat().delete_text)
    clear.grid(row=5, column=3, columnspan=1)
    # 复制
    copys = Button(window, text='复制', font=('Arial', 12), width=10, height=1, command=Repeat().copy_s)
    copys.grid(row=5, column=4, columnspan=2)
    ft = tf.Font(family='黑体', size=10, underline=1)
    rb_right_Label = Label(window, foreground='blue', text='Copyright © 2020-2021 Harry. All rights reserved.', font=ft)
    rb_right_Label.grid(row=7, column=2, columnspan=4, pady=20)
    # 绑定label单击时间
    rb_right_Label.bind("<Button-1>", Repeat().open_url)
    window.mainloop()
