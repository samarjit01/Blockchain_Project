import requests
import datetime
import json
import ast	

import urllib
import urllib2




x ={
  "$class": "org.neil.Shop_peer",
  "ShopId": "s11",
  "ShopName": "string",
  "password": "string",
  "Add": {
    "$class": "org.neil.Address",
    "address": "string",
    "city": "string",
    "state": "string",
    "country": "string",
    "zip": "string"
  },
  "Contact_no": "string",
  "Shop_products": [
    " "
  ]
}

data ={}
data["$class"]= "org.neil.Shop_peer"
data["ShopId"]="shop1"
data["shopname"]="shop"
data["password"]="pass"
address = {
    "$class": "org.neil.Address",
    "address": "string",
    "city": "string",
    "state": "string",
    "country": "string",
    "zip": "string"
  }
data["Add"] = address
data["Contact_no"]="12345"
p =[]
p.append(" ")
data["Shop_products"] = p

api = "http://192.168.0.110:3000/api/Shop_peer"
r = requests.post(url = api, data = data)
print(r.text)


x= input()


api = "http://192.168.0.118:3000/api/Insurance_peer"

x ='{"$class": "org.neil.Insurance_peer","InsuranceId": "i2","CompanyName": "string","password": "string","my_policies":[" "]}'

x = json.loads(x)
print(x)
r = requests.post(url = api, data = x)
print(r.text)


x = input()

#Add Product  

api = "http://192.168.0.118:3000/api/AddProduct"

x ={
  "$class": "org.neil.AddProduct",
  "shop": "resource:org.neil.Shop_peer#neil@gmail.com",
  "commodity": "resource:org.neil.Product#p100"
   }

r = requests.post(url = api, data = x)
print(r.text)

#Buy Product 

api = "http://192.168.0.118:3000/api/Buy"

x ={
  "$class": "org.neil.Buy",
  "pro":"resource:org.neil.Product#p100",
  "NewOwner": "resource:org.neil.Customer_peer#c1",
}

r = requests.post(url = api, data = x)
print(r.text)

#Define Policy

api = "http://192.168.0.118:3000/api/DefinePolicy"

x ={
  "$class": "org.neil.DefinePolicy",
  "insurance": "i1",
  "typeofpolicy": "policy1"
}
r = requests.post(url = api, data = x)
print(r.text)



#Define Policy

api = "http://192.168.0.118:3000/api/DefinePolicy"

x ={
  "$class": "org.neil.DefinePolicy",
  "insurance": "i1",
  "typeofpolicy": "policy1"
}
r = requests.post(url = api, data = x)
print(r.text)








