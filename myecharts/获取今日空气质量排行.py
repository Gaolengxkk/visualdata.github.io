import urllib.request
import json
import jsonpath
import time

url=r"https://aqiapp.daqi110.com/report/city/rank/group?group=28&period=0"
#  请求头
headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) '
                            'AppleWebKit/537.36 (KHTML, like Gecko)'
                            'Chrome/90.0.4430.212 Safari/537.36'}
#  添加请求头
req=urllib.request.Request(url,headers=headers)
#  请求网页，返回响应对象
response=urllib.request.urlopen(req)
#  读取json数据并解码
data=response.read().decode('utf-8')
#  反序列化成python对象
json1=json.loads(data)
#  数据抽取
#  api空气指数列表
aqi=jsonpath.jsonpath(json1,'$.list[*].aqi')
print(aqi)
#  城市名列表
city=jsonpath.jsonpath(json1,'$.list[*].city')
print(city)
dict={}
dict["aqi"]=aqi
dict["city"]=city

json=json.dumps(dict)
with open(r".\实时.json",'w') as f:
    f.write(json)