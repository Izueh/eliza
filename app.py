from flask import Flask, url_for, request, render_template, send_from_directory
from scripts.doctor.doctor import rive
import datetime

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':

        return render_template('index.html')
    elif request.method == 'POST':
        return "Hello %s, %s" % (request.form['name'],
                                 datetime.datetime.now().strftime("%b %d %Y, %I:%M %p"))


@app.route('/DOCTOR', methods=['GET', 'POST'])
def doctor():
    if request.method == 'GET':
        return render_template('chatbot.html')
    if request.method == 'POST':
        return rive.reply('test', request.form['message'])


if __name__ == '__main__':
    app.run()
