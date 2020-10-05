import datetime
import os
 
from flask import Flask, Response, request

app = Flask(__name__)

@app.route("/api")
def index():
    return "Hello from api"
    
if __name__ == "__main__":
    app.run(debug=True, port=5000)