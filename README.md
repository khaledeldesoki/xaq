# Stream Payment Salary App

## Overview
This project is a stream payment salary app using React and DeFi concepts. It links with a task platform to ensure employees get paid only when tasks are completed.

## Features
- Task management platform
- Salary streaming using DeFi protocols
- Integration with blockchain for secure payments

## Setup

### Prerequisites
- Node.js
- GitHub Codespaces
- Ganache CLI (for local blockchain)
- Truffle (for smart contract testing)
- MetaMask (for local wallet)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/stream-payment-app.git
   cd stream-payment-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

### Running the Backend

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

### Running the Local Blockchain

1. Start Ganache CLI:
   ```bash
   ganache-cli
   ```

2. Compile and deploy contracts:
   ```bash
   truffle compile
   truffle migrate
   ```

3. Configure MetaMask to connect to the local blockchain (http://127.0.0.1:7545).

### Testing Smart Contracts

1. Run tests:
   ```bash
   truffle test
   ```

## Deployment

- Frontend: Use GitHub Pages or Vercel
- Backend: Deploy on Heroku or any other cloud service

## License
This project is licensed under the MIT License.