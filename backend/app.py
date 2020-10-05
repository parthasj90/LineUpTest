import requests
 
from flask import Flask, Response, jsonify, request
from marshmallow import Schema, fields

app = Flask(__name__)

class UserDataSchema(Schema):
    avatar = fields.Str()
    email = fields.Email()
    first_name = fields.Str(data_key="firstName")
    id = fields.Integer()
    last_name = fields.Str(data_key="lastName")

UserSchema = UserDataSchema()

@app.route("/api/<int:id>", methods=['GET'])
def index(id):
    r = requests.get("https://reqres.in/api/users/"+str(id))
    data = UserSchema.dump(r.json()["data"])
    return data
    
if __name__ == "__main__":
    app.run(debug=True, port=5000)