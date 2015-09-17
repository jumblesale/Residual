from flask import Flask
from flask import request

with app.test_request_context('/students', method='GET'):
    assert request.path == '/hello'
    assert request.method == 'POST'