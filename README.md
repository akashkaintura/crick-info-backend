# 🏏 Cricbuzz Clone - Backend

Welcome to the backend service for the Cricbuzz Clone! This server is built with **Node.js** and **Express** and utilizes **Firebase** for authentication and database storage. It connects to the **RapidAPI** to fetch real-time cricket data for matches, series, and scorecards. 

## 🌟 Features

- **User Authentication & Personalization** - Sign up, login, and save user preferences with Firebase Authentication.
- **Live Commentary & Ball-by-Ball Updates** - Fetch live match data from RapidAPI and simulate commentary.
- **Advanced Match Analytics** - Visualize statistics like run rates and partnerships.
- **Dark Mode Support** - Switch between light and dark themes.

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime for server-side development.
- **Express.js** - Web framework for building RESTful APIs.
- **Firebase** - Authentication and Firestore database for secure data storage.
- **Axios** - HTTP client for making API requests.
- **WebSocket** - Real-time data streaming.
- **dotenv** - Manage environment variables.
- **RapidAPI** - API provider for cricket data.

## 🚀 Getting Started

### Prerequisites

- **Node.js** - Download and install from [Node.js](https://nodejs.org/)
- **Firebase Project** - Set up a Firebase project and download the service account key.
- **RapidAPI Key** - Get a key from [RapidAPI](https://rapidapi.com/).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/cricbuzz-clone-backend.git
   cd cricbuzz-clone-backend


2. **Install dependencies**:
    ```bash
    npm install

3. **Setup environment variables**:
- ***Create a .env file in the root directory***.
- ***Add the following keys***:
    ```bash
    RAPID_API_KEY=your-rapidapi-key
    FIREBASE_PROJECT_ID=your-firebase-project-id
    FIREBASE_CLIENT_EMAIL=your-firebase-client-email
    FIREBASE_PRIVATE_KEY=your-firebase-private-key

4. **Run the Server**
    ```bash
    npm start

