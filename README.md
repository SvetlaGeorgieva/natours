# Natours

> A node.js website application with dynamic data where you can browse, rate and book different tours.

By building this project I am learning node.js, Express and MongoDB.

## How to setup and run this project - TODO

- **Install Node.js version 10+**
- **Fork and clone repository**

- **how to create MongoDB database and fill it with data** - TODO

- **SMTP settings**

  - To capture SMTP traffic from our dev environment, we can use a service like 'mailtrap'. Then username, password, host and port will need to be set in our 'config.env' file.

  - Example with Mailtrap:
    > - create new account on [https://mailtrap.io/](https://mailtrap.io/)
    > - Tab 'Inboxes' -> create new project and give it a name (like 'natours')
    > - Under tab 'SMTP Settings' -> click on 'Show Credentials' -> there you will find your username, password, host and port settings.

- **Configuration**

  - Create `'config.env'` file in the top folder (next to package.json)

  - To fill `'config.env'` with data, use `'sample_config.env'` file in the top folder as a basis.

  - Replace variables:

    > - `DATABASE` -> replace your username and MongoDB cluster name
    > - `DATABASE_PASSWORD` -> replace your MongoDB database password
    > - `JWT_SECRET` -> can be any string you want. Simply make it a little longer, around 30-50 characters long. Like `some-very-very-long-string-for-your-secret`
    > - `EMAIL_USERNAME` -> Set to your SMTP username
    > - `EMAIL_PASSWORD` -> Set to your SMTP password
    > - `EMAIL_HOST` -> Set to your SMTP username. `EMAIL_HOST=smtp.mailtrap.io` if you are using Mailtrap.
    > - `EMAIL_PORT` -> Set to your SMTP port. `EMAIL_PORT=25` if you are using Mailtrap.

- **Run the project locally**
  - `npm install` -> to install all dependencies
  - `npm run build` -> to package the javascript files with Parcel
  - `npm run start` -> to start the server
  - The app will be running on port 3000  
    [http://127.0.0.1:3000/](http://127.0.0.1:3000/)

## Built Using

- Javascript, npm, node.js, Express
- HTML, CSS, PUG templates
- MongoDB, mongoose
- Postman

## Screenshots/videos - TODO

- TODO basic screens screenshots

## API documentation

> The API documentation generated with Postman can be viewed here:  
> [https://documenter.getpostman.com/view/16347966/UVR5rpUQ](https://documenter.getpostman.com/view/16347966/UVR5rpUQ)
