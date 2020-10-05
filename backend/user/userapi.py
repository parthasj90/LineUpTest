from flask import Blueprint
import requests
from .userschema import UserDataSchema

user_bp = Blueprint("api", __name__)
UserSchema = UserDataSchema()


@user_bp.route("/api/<int:id>", methods=['GET'])
def getUserById(id):
    r = requests.get("https://reqres.in/api/users/"+str(id))
    data = UserSchema.dump(r.json()["data"])
    return data
