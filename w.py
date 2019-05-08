import urllib.request
import urllib.parse
import json
content = input("your city,please:")

while isinstance(content,str):
	url = "http://api.jirengu.com/weather.php?city="+urllib.parse.quote(content)
	print(url)
	# data = {}
	# data['type'] = 'AUTO'
	# data['i'] = content
	# data['doctype'] = 'json'
	# data['xmlVersion'] = '1.6'
	# data['keyform'] = 'fanyi.web'
	# data['ue'] = 'UTF-8'
	# data['typeResult'] = 'true'
	# data = urllib.parse.urlencode(data).encode('utf-8')
	response = urllib.request.urlopen(url)
	html = response.read()
	target = json.loads(html)
	weatherData = target['results'][0]['weather_data']
	print("城市:%s  pm25:%s " % (target['results'][0]['currentCity'],target['results'][0]['pm25']))

	# print("%s" %(weatherData))

	# print (len(weatherData))

	detail = ''
	for i in range(0, len(weatherData)):
  		print (weatherData[i]['date'])
	
  		# detail += item.date
	# print("%s" %(detail))

	content = input("your city,please:")
