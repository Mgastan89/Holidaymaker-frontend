# HolidayMaker

## Backend Repository

[HolidayMaker Backend](https://github.com/Mgastan89/HolidayMaker-Backend)

HolidayMaker is a web application that allows users to register, log in, and book activities in different cities or places. The application is built using React for the frontend and Spring Boot for the backend.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Backend

1. Clone the repository:
    ```sh
    git clone https://github.com/Mgastan89/HolidayMaker-Backend.git
    cd HolidayMaker-Backend
    ```

2. Set up the database:
    - Ensure you have MySQL installed and running.
    - Create a database named `holidaymaker`.
    - Update `application.properties` with your database credentials.

3. Build and run the Spring Boot application:
    ```sh
    mvn clean install
    mvn spring-boot:run
    ```

### Frontend

1. Navigate to the frontend directory:
    ```sh
    cd ../frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the React application:
    ```sh
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new user or log in with existing credentials.
3. Explore activities and places.
4. Book activities and view your bookings.

## API Endpoints

### User Endpoints

- **Register**: `POST /api/users/register`
    - Request body: 
      ```json
      {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "username": "johndoe",
        "password": "password",
        "userType": "BASIC",
        "address": {
          "street": "123 Main St",
          "city": "Anytown",
          "state": "CA",
          "postalCode": "12345"
        }
      }
      ```

- **Login**: `POST /api/users/login`
    - Request body:
      ```json
      {
        "username": "johndoe",
        "password": "password"
      }
      ```

### Activity Endpoints

- **Get all activities**: `GET /api/activities`
- **Get activity by ID**: `GET /api/activities/{id}`

### Place Endpoints

- **Get all places**: `GET /api/places`
- **Get place by ID**: `GET /api/places/{id}`

## Features

- User registration and login
- Activity and place browsing
- Activity booking
- User profile management

## Technologies

- **Frontend**: React, CSS
- **Backend**: Spring Boot, Java, MySQL
- **Build Tools**: Maven
- **Other Libraries**: Lombok, React Router, react-slick

## Contributing

1. Fork the repository.
2. Create your feature branch:
    ```sh
    git checkout -b feature/my-new-feature
    ```
3. Commit your changes:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/my-new-feature
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
