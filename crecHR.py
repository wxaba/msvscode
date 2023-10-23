import requests
x = requests.get('https://www.runoob.com/',verify=False)
print(x.text)