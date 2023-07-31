# Punches Management System

This is a simple Punches Management System application built using Node.js and React. It allows you to record your daily work hours, including the date and time you punched in and out.

## Features

- Register new punch with date and time
- View list of all punches
- Delete a punch entry

## Technologies Used

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- Moment.js (for handling dates)

### Frontend

- React
- Axios (for making HTTP requests)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB installed and running

### Backend Setup

1. Navigate to the "backend" directory.
2. Install dependencies: `npm install`
3. Rename ".env.example" to ".env" and configure the MongoDB connection URI.
4. Start the backend server: `npm start`

### Frontend Setup

1. Navigate to the "frontend" directory.
2. Install dependencies: `npm install`
3. Start the frontend development server: `npm start`

## Usage

1. Access the frontend application in your web browser: `http://localhost:3000`
2. Register your daily work hours by clicking the "Punch In" or "Punch Out" buttons.
3. View the list of all punches on the homepage.
4. To delete a punch, click the "Delete" button next to the punch entry.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
