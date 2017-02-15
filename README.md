#README

**Fireshare** is a private cloud-based storage app that grew out of a desire to share files between friends.

The project is a functioning single page application that leverages a [Firebase](https://firebase.google.com) integration to store and serve user content safely and effectively.

- A **Node** backend with REST API. Out API handles the CRUD ops and serves endpoints in a logical, streamlined, and agnostic fashion.

- A **React** frontend with **Redux** and **React-Router**.  React ensures that the user gets the type of performant experience that is expected from modern web apps.


---



Get **Fireshare**:

Note: You will need [Node.js](https://nodejs.org/en/download/), [MongoDB](https://www.mongodb.com/), and [Nodemon](https://nodemon.io/) (Nodemon is optional).

- Clone this repository to your machine locally:
```
$ git clone https://github.com/ryanab/fileshare.git
```
- Create your private environmental variables file and drop your secrets in:
```
$ cd ~/your/path/to/fileshare
$ touch .env
```

- Set up your secrets:

```
MONGO_URL=mongodb://localhost/fileshare
TOKEN_SECRET=yourFirstFancySecretHere!
SESSION_SECRET=onlyYouKnowYourSecrets!

```

Note: You will not be able to run your local server without your ```.env``` file!

- Next make a config file for the cloudinary integration:

```
$ cd ~/your/path/to/fileshare/src
$ touch config.js
```

- Put your key information in the config.js file:

```
export default {
  CLOUDINARY_API_KEY: 'yourKey',
  CLOUDINARY_API_SECRET: 'yourSecret',
  CLOUDINARY_UPLOAD_PRESET: 'yourUploadPreset',
  CLOUDINARY_CLOUD_NAME: 'yourCloudName'
}

```

- Install node modules:

```
$ cd ~/your/path/to/fileshare
$ npm install
```

- Run webpack:

```
$ webpack -w
```

- In a separate tab in the terminal, run your local Mongo database:

```
$ cd ~/your/path/to/fileshare
$ mongod
```

In *another* separate tab in the terminal, run your node server with Nodemon (or without):
- Using Nodemon:

```
$ cd ~/your/path/to/fileshare
$ nodemon
```

- Without Nodemon:
```

$ cd ~/your/path/to/fileshare
$ npm start
```

- Open up your browser and navigate to [http://localhost:3000](http://localhost:3000) - enjoy!

Team:
---

**[JD Richards](https://github.com/jdrichardstech)**

**[Ryan Byrn](https://github.com/ryanab)**

**[Rob Ungar](https://github.com/robungar)**

**[Forrest Filler](https://github.com/forrestfiller)**

**[Forrest Pan](https://github.com/panforrest)**

Issues? Improvements?
---
- Please file an issue or feature request above in the issues tab.

- If you want to get involved, please fork the repo and send us a pull request, we will do our best to get back to you quickly, thank you for your patience!
