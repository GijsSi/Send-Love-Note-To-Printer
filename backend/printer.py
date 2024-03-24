from flask import Flask, request
from escpos.printer import Network
from flask_cors import CORS

app = Flask(__name__)
CORS(app) 

@app.route('/print', methods=['POST'])
def print_message():
    data = request.get_json()
    message = data.get('message', '')
    

    printer = Network("XXX.XXX.X.XXX") #Printer IP Address
    printer.text("\nMessage from KatjaLovesGijs.Love:\n")
    printer.text("\n" + message + " \n")
    printer.cut()

    return {"status": "Message sent to printer"}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)