
<h1 align="center">Role Based Login System</h1>

## Description

This project is a backend application built with the [Nest](https://github.com/nestjs/nest) framework using TypeScript. It features secure role-based authentication using **JWT (JSON Web Token)**, allowing users to log in and access resources based on their roles. The system ensures that only authorized users can access specific endpoints. A **Swagger UI** is included for easy API testing and documentation, making it simple to explore and interact with the API directly from your browser.

## Live API Documentation

You can access the live Swagger UI for this project at the following link:

**Swagger UI**: [https://role-based-login-system.onrender.com/docs](https://role-based-login-system.onrender.com/docs)

To test the API endpoints, use the following base URL:

**Base URL**: [https://role-based-login-system.onrender.com](https://role-based-login-system.onrender.com)

## Environment Variable Setup

To configure your environment variables, generate a `.env` file from the provided `.env.example` template. Use the following command:

```bash
$ cp .env.example .env
```

After generating the .env file, populate it with your MongoDB credentials and other necessary configuration values as described below:

- **PORT:** The port number on which the application will run. Default is `4000`.
- **MONGO_USER:** The username for your MongoDB instance.
- **MONGO_PASSWORD:** The password for your MongoDB instance.
- **MONGO_HOST:** The host address of your MongoDB instance.
- **MONGO_DATABASE:** The name of the MongoDB database to connect to.
- **JWT_SECRET:** A secret key used to sign and verify JWT tokens. This should be a strong, random string.
- **JWT_EXPIRATION:** The duration for which a JWT token remains valid. For example, `7d` means the token will expire in 7 days.


## Project Setup

Install the project dependencies by running:

```bash
$ npm install
```

## Compile and Run the Project

Use the following commands to compile and run the project:

```bash
# Development mode
$ npm run start

# Watch mode (automatically restarts on file changes)
$ npm run start:dev

# Production mode
$ npm run start:prod
```

> **⚠️ Important Note:**
>
> This project includes a **Swagger UI** for easy API testing and documentation. You can access the Swagger UI at:
>
> **`http://localhost:PORT/docs`**
>
> To test API endpoints, use the base URL:
>
> **`http://localhost:PORT`**
>
> Replace **PORT** in the URLs with the port number specified in your `.env` file.

## Stay in Touch

- **Portfolio**: [irfanulislam.netlify.app](https://irfanulislam.netlify.app/)
- **LinkedIn**: [Irfanul Islam](https://www.linkedin.com/in/irfanulislamjishan/)
- **Facebook**: [Irfanul Islam](https://www.facebook.com/rko.jishan/)
- **Twitter/X**: [@IrfanulI79919](https://twitter.com/IrfanulI79919)

Feel free to connect with me through any of the channels above!
