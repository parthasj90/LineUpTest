from flask import Blueprint
import requests
from .userschema import UserDataSchema

# create a user blue print
user_bp = Blueprint("api", __name__)

# create a user schema object
UserSchema = UserDataSchema()

# api route to ingest the reqres api


@user_bp.route("/api/<int:id>", methods=['GET'])
def getUserById(id):
    r = requests.get("https://reqres.in/api/users/"+str(id))
    data = UserSchema.dump(r.json()["data"])
    return data
