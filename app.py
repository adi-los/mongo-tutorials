import socket

url = str(input("Enter Url address:"))

host = socket.gethostbyname(url)

print(host)