import os

path = '/home/shepherdz/Rock-Radar/Rock-Radar/index.html'
with open(path, 'rb') as f:
    data = f.read()

before = data.count(b'\xe2\x80\x9c') + data.count(b'\xe2\x80\x9d')
data = data.replace(b'\xe2\x80\x9c', b'"')
data = data.replace(b'\xe2\x80\x9d', b'"')
data = data.replace(b'\xe2\x80\x98', b"'")
data = data.replace(b'\xe2\x80\x99', b"'")

with open(path, 'wb') as f:
    f.write(data)

after = data.count(b'\xe2\x80\x9c') + data.count(b'\xe2\x80\x9d')
print(f'Fixed {before} curly quotes, {after} remaining')
