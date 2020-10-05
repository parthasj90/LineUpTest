from marshmallow import Schema
from marshmallow.fields import Str, Email, Integer


class UserDataSchema(Schema):
    avatar = Str()
    email = Email()
    first_name = Str(data_key="firstName")
    id = Integer()
    last_name = Str(data_key="lastName")
