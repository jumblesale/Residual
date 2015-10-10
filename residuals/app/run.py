from flask import Flask, render_template

app = Flask(__name__)

app.config.from_pyfile('instance/default.py')
app.config.from_envvar('FLASK_SETTINGS')

@app.route('/residuals')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0')
