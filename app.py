from flask import Flask, url_for, request, render_template, redirect
from scripts.doctor.doctor import rive
import datetime

app = Flask(__name__)


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('index.html')
    elif request.method == 'POST':
        return redirect(url_for('doctor'))


@app.route('/DOCTOR', methods=['GET', 'POST'])
def doctor():
    if request.method == 'GET':
        return render_template('chatbot.html')
    if request.method == 'POST':
        return rive.reply('dev',request.form['message'])


if __name__ == '__main__':
    app.run()
