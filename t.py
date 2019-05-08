import urllib.request
import urllib.parse
import json
content = input("your words,please:")

while isinstance(content,str):
	url = "http://fanyi.youdao.com/translate?smartresult=dict&smartresult=rule&smartresult=ugc&sessionFrom=http://www.youdao.com"
	data = {}
	data['type'] = 'AUTO'
	data['i'] = content
	data['doctype'] = 'json'
	data['xmlVersion'] = '1.6'
	data['keyform'] = 'fanyi.web'
	data['ue'] = 'UTF-8'
	data['typeResult'] = 'true'
	data = urllib.parse.urlencode(data).encode('utf-8')
	response = urllib.request.urlopen(url,data)
	html = response.read().decode('utf-8')
	target = json.loads(html)
	print("%s" % (target['translateResult'][0][0]['tgt']))

	content = input("your words,please:")
