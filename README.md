# LineUpTest

To run the app : docker-compose up --build

The app will be launched in http://localhost:3000
To view the user info navigate to :

http://localhost:3000/users/<id> where id can be any number

- The app is divided into frontend and backend folders.

- docker-compose.yml file is used to manage the both the containers.

Backend :

- It is a flask app with the entry point as app.py.
- All similar apis will be stored in separate folders.
- Currently as there is only one type of api , the app has one folder user.
- Each folder will contain api.py and schema.py files which contain the routes and schema respectively
- Requirements.txt and Dockerfile are for containerization purposes.
- To run only the backend app: move to the backend folder and python app.py

Frontend:

- It is a react app created using the createreactapp cli with the entry point as App.js.This file uses the react router to create routes.
- All components are present under the src/components folder.
- Homepage Component is to render the homepage.
- NotFound Component is to render the not found page.
- Profile Component is to display the profile card of the user.
- All components utilize the react styled components.
- actions folder contains all the actions and api calls.
- Reducers folder contains all the reducers. Currently one reducer is being used as we are consuming onl one user api.
- App.css can be used to override global css if neededd.
- package.json is used to manage the dependencies and scripts.
- Dockerfile is used for containerization purposes.
- To run only the frontend app: move to the frontend folder and npm start
