

# Cocktails Corner

## Introduction
The Cocktails Application allows users to search for cocktail recipes, save their favorite cocktails, and view detailed information about each cocktail. The app is built using React and Firebase Firestore for real-time data management.



## Requirements
To run this application, you will need the following:

1. **Node.js**: Ensure that Node.js is installed. You can download it from [Node.js official website](https://nodejs.org/).
2. **Firebase Project and API Key**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore Database in your Firebase project.
   - Obtain your Firebase API key from the project settings.

## Installation Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/cocktail-app.git
   cd cocktail-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Setup Firebase Configuration**:
   Create a `firebase.js` file inside the `src/pages` directory and add your Firebase configuration:
   ```javascript
   // src/pages/firebase.js
   import { initializeApp } from 'firebase/app';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID"
   };

   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);

   export { db };
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open the Application**:
   Open your browser and go to `http://localhost:3000`.

## Login Details
If there are pre-existing accounts, you can use the following credentials to log in:

- **Admin Account**:
  - **Email**: admin@example.com
  - **Password**: adminpassword

- **User Account**:
  - **Email**: user@example.com
  - **Password**: userpassword

You can create additional accounts through the application’s registration process if required.

## Available npm Commands

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run serve`**: Serves the built application locally.
- **`npm run lint`**: Runs ESLint to check for code quality and potential issues.
- **`npm run test`**: Runs the test suite (if tests are implemented).

## Additional Notes

- Ensure that your Firebase Firestore rules are set to allow read and write access for authenticated users.
- Make sure to replace the placeholders in the `firebase.js` configuration with your actual Firebase project details.
- If you encounter any issues, check the console for error messages and verify your Firebase configuration and setup.

---

This README.md file provides a clear and detailed guide for setting up and running your Cocktails Application. It covers all necessary aspects, from requirements and installation steps to available npm commands and login details.


