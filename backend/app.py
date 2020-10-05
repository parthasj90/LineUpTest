
from user.userapi import user_bp
from flask_cors import CORS
from flask import Flask
import os
import sys
sys.path.append(os.path.dirname(os.path.realpath(__file__)))


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.register_blueprint(user_bp)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=os.getenv('PORT'))
