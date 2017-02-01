from flask import Flask, url_for, request, render_template, send_from_directory
import datetime

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return send_from_directory('static/', filename='index.html')
    elif request.method == 'POST':
        return "Hello %s, $s" % request.form['name'], datetime.date


@app.route('/DOCTOR')
def doctor():
    return ''


if __name__ == '__main__':
    app.run()
