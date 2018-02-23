# NodeJS and Passport

In this simple application we're making use of [PassportJS](http://www.passportjs.org/) and [NodeJS](https://nodejs.org/en/) to authenticate a user using [google strategy](https://github.com/jaredhanson/passport-google-oauth2).

## Prerequisites

Create an application in the google console developers [here](https://console.developers.google.com).

In the **Restrictions** area write the following:

- Authorized JavaScript origins: `http://localhost:3000`
- Authorized redirect URIs: `http://localhost:3000/auth/google/redirect`
- Create `Client ID` and `Client secret` for your app

Create a mongodb data base in [Mlab](https://mlab.com/).

## Installing

You have to follow these steps:

```bash
# Clone the repository
$ git clone https://github.com/gustavocd/node-and-passport.git
```

```bash
# Change directory
$ cd node-and-passport
```

```bash
# Rename .env.example file to .env
$ mv .env.example .env
```

**Note:** replace env variables in your `.env` file according to **your credentials** (if you want to replace the port you can do it, just make sure your google app is pointing to the correct port by default is `3000`).

Using npm:
```bash
# Install nodemon globally
$ npm install -g nodemon
```

```bash
# Install dependencies
$ npm install
```

```bash
# Run the application
$ npm start
```

Using yarn instead of npm:
```bash
# Install dependencies
$ yarn
```

```bash
# Run the application
$ yarn start
```

Finally visit and try it!

[http://localhost:3000](http://localhost:3000)
