### _To make your own exercise tracker app using MERN stack_

Video Tutorial [link](https://youtu.be/7CqJlxBYj-M)

Start by creating a react app
```bash
npx create-react-app mern-workout-tracker
```

## Back End

Inside the folder `mern-workout-tracker` create another folder where back-end codes will reside.
```bash
cd mern-workout-tracker
npm init -y
```
Install required dependencies with
```bash
npm install express cors mongoose dotenv
```

Another thing we need to install is **nodemon**. It automatically restarts the server whenever the serever code changes. We need to install nodemon globally.
```bash
sudo npm install -g nodemon
```
To run the code from your terminal-
```bash
nodemon server
```

Create a `.env` file inside `back-end`. To connect MongoDB database with the back-end, log in to **MongoDB Atlas** and at a cluster click `connect`. Google `What's my IP` and copy your IP address. At cluster->Security->Network Access, add your IP address as whitelisted. Then click `connect your application`. Copy the connection string and paste it in back-end/.env file, put it as follows-
```
ATLAS_URI=<connection_string>
```
In place of password, place the password of the database user.

After adding the models and routes, if we send a POST request from `postman` with request body as a **json**-
```json
{
  "userName": "Haz"
}
```
The response should say `User added!`.

## Front End

We won't require all the files of React app. So delete unnecessary files.
Inside the project directorty, open a terminal and run-
```bash
npm install bootstrap
```
And then install `react-router-dom`. It makes the redirection of an url to a react component easier.
```bash
npm install react-router-dom
```

We need to install DatePicker for handling date inputs-
```bash
npm install react-datepicker
```

## Integrate Front-end with Back-end

Install axios in the front-end directory-
```bash
npm install axios
```
Using `axios`, we can make http requests to our back-end from the front-end. At this stage, the full MERN stack should work finely!
