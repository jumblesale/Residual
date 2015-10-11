from flask import Flask, render_template, request, make_response

import json
import datetime

app = Flask(__name__)

app.config.from_pyfile('instance/default.py')
app.config.from_envvar('FLASK_SETTINGS')

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/students/export', methods=['POST'])
def export_students():
    response = make_response(render_template(
        'student-residuals.csv',
        data=json.loads(request.form['data'])
    ))

    response.headers["Content-Disposition"] = "attachment; filename=student-residuals-%s.csv" %\
                                              datetime.datetime.now().strftime("%Y-%m-%d-%H:%M")
    response.headers["Content-Type"] = "application/csv"

    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=app.config['PORT'])
