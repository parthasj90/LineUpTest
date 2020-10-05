from marshmallow import Schema
from marshmallow.fields import Str, Email, Integer

# schema for the user data and covert api keys to camel case


class UserDataSchema(Schema):
    avatar = Str()
    email = Email()
    first_name = Str(data_key="firstName")
    id = Integer()
    last_name = Str(data_key="lastName")
