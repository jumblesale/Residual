from flask import Flask
from flask import jsonify

app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


@app.route("/students", methods=["GET"])
def getStudents():
    return jsonify(message='hello!')

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8080, debug=True)
