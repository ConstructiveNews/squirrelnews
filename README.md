# squirrelnews
Squirrel News App Monorepo contains all custom source code to use in the application. 

## Frontend

### Angular Fire 

The Frontend uses Angular Fire and is configured in Firebase as a Webapp as we are developing a hybrid solution that is as x-platform as possible. 

## Firebase 

We are using Firebase as our Application Cloud Backend. So far we are using 

* Firestore to persist Articles
* Functions to provide an API for third-party-apps to publish curations

### Runtime Environment for Functions

To access firestore in the function environemnt, we configured

    "service_acc": {
      "clientemail" :string
      "projectid": string
      "key": string (the private key)
    }


#### Info Local Development

To run the application locally, run

    npm run serve 

If your runtime conf or environment is empty, think about the following:

Firebase stores its enviroment on localhost in a .runtimeconfig.json which should not be versioned in git for safety and security reasons. Instead, if you want to start developing you will need to ask an admin for a private key to access firestore from the function or if you are the admin, generate a new private key using the firebase console and store them in the respective file. 

For more information visit: https://firebase.google.com/docs/functions/config-env
