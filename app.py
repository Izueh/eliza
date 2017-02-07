from flask import Flask, url_for, request, render_template, redirect, jsonify
from scripts.doctor.doctor import rive
import datetime

app = Flask(__name__)



@app.route('/eliza', methods=['GET', 'POST'])
def index():
    if request.method == 'GET':
        return render_template('index.html')
    elif request.method == 'POST':
        return render_template('index.html',name=request.form["name"], date=datetime.datetime.now().strftime("%b %d %Y %X"))


@app.route('/eliza/DOCTOR', methods=['POST'])
def doctor():
    if request.method == 'POST':
        return jsonify(eliza=rive.reply('dev',request.form['human']))


if __name__ == '__main__':
    app.run()
