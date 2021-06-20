# 导入所需模块
import xlrd
import pandas as pd
import os
import glob

'''
将一个excel文件中的多个sheet分离出来并且以csv格式保存
'''
class csvv:
    def __init__(self,excel_file):
        self.path = os.getcwd() + '/csv/*.csv'
        self.excel2csv(excel_file)
    def excel2csv(self,excel_file):
        # 打开excel文件
        workbook = xlrd.open_workbook(excel_file)
        # 获取所有sheet名字
        sheet_names = workbook.sheet_names()
        for worksheet_name in sheet_names:
            # 遍历每个sheet并用Pandas读取
            data_xls = pd.read_excel(excel_file, worksheet_name, index_col=None)
            # 获取excel当前目录
            dir_path = os.path.abspath(os.path.dirname(excel_file))
            # 转换成csv并保存到excel所在目录下的csv文件夹中
            csv_path = dir_path + '\\csv\\'
            if not os.path.exists(csv_path):
                os.mkdir(csv_path)
            data_xls.to_csv(csv_path + worksheet_name + '.csv', index=None, encoding='utf-8')
        self.hebin()
    # 将分离出来csv格式的文件合并成一个表
    def hebin(self):
        csv_list = glob.glob(os.getcwd()+'/csv/*.csv')
        print(u'共发现%s个CSV文件' % len(csv_list))
        print(u'正在处理')
        for i in csv_list: #循环读取同文件夹下的csv文件
            fr = open(i, 'rb').read()
            with open('allres.csv', 'ab') as f:  # 将结果保存为result.cs
                f.write(fr)
        print(u'合并完毕！')


if __name__ == '__main__':
    dirr = os.getcwd() + '/csv'
    if not os.path.exists(dirr):
        csvv(dirr+'/1.xlsx')