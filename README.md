# BED Final Project Starter

This repository contains starter code for the Bookings project.

## How to get started

You can clone the repo, install and run the app with the following commands:

````plaintext
<<<<<<< HEAD

npm install      (open in the 1e terminal)
npm install har-validator@latest (if you do not have the node_modules)
npm install uuid@latest          (if you do not have the node_modules)
npm install
npm run dev

npx prisma studio (open in the 2e extra terminal, so you will have 2 terminals open)
=======
>>>

## Starting the App

To start the app, follow these steps:

1. Create a `.env` file in the root directory.
2. Replace the values for `AUTH_SECRET_KEY` and `SENTRY_DSN` with your own values.

```plaintext
AUTH_SECRET_KEY=your_secret_key_here
SENTRY_DSN=your_sentry_dsn_here
````

## Running tests

Tests are created using Newman, a command-line tool that is able to automate execution of Postman-created tests. Therefore, this command will simulate more or less the same tests that we executed during the course (e.g. test if the "happy case" returns 200 or 201 status code, or it returns 404 Not found when we are requesting a non-existing ID).

To run the tests, perform the following steps:

1. Start the server. This can usually be done by running `npm run dev` in the folder you want to test.
2. Go to `postman/environments` folder in the repo. It has a content like this:

```json
{
  "id": "f1936dc5-a5da-47d7-8189-045437f96e9e",
  "name": "Local",
  "values": [
    {
      "key": "baseUrl",
      "value": "http://0.0.0.0:3000",
      "type": "default",
      "enabled": true
    }
  ],
  "_postman_variable_scope": "environment",
  "_postman_exported_at": "2023-08-11T05:55:13.469Z",
  "_postman_exported_using": "Postman/10.16.9"
}
```

3. If your server is running on a different port or URL, change the value `http://0.0.0.0:3000` to your server's data (this is the default one though).
4. Run the following command

```plaintext
npm test
```

After this, you will see the test results prompted to the terminal. If you have a look at the `package.json` file, you will see that it executes the collection stored in the `postman` folder of the repo root.

Important: When dealing with JSON data, please, make sure that you restart the server with `npm run dev` every time you execute tests! This is important because some tests will remove data via DELETE endpoints and that operation cannot be repeated with the same ID again and again.
<<<<<<< HEAD
=======

``` Thanks and credits to WincAcademy in Amsterdam, The Netherlands! ```
![image](https://github.com/aelyakoubi/bed-final-repository/assets/115151631/18ed8d47-0415-4b3b-b6a4-dc1764abbd1b)
![bed-final-repository_image03](https://github.com/aelyakoubi/bed-final-repository/assets/115151631/a06f2b4d-0315-4a38-ab23-2500158be4dd)
![image](https://github.com/aelyakoubi/bed-final-repository/assets/115151631/63819e39-edab-4123-9859-d0a2fd73c527)

>>>>>>> c63ff6d42f9939d1fc197e19d1f0606d761d7ad4
