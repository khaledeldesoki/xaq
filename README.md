# Stream Payment Salary

A simple project for streaming salary payments using React and Solana.

## Project Structure

```
stream-payment-salary/
├── backend/
│   ├── migrations/
│   ├── programs/
│   ├── src/
│   ├── target/
│   ├── Cargo.toml
│   ├── Cargo.lock
│   └── Solana.toml
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── PaymentForm.js
│   │   ├── utils/
│   │   │   └── solana.js
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── index.css
│   │   └── App.css
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── .gitignore
├── .gitignore
└── README.md
```

## Instructions

### Backend

1. Navigate to the `backend` directory and build the Solana program:
   ```sh
   cd backend
   cargo build-bpf
   ```

### Frontend

1. Navigate to the `frontend` directory and install the dependencies:
   ```sh
   cd frontend
   npm install
   ```

2. Start the React application:
   ```sh
   npm start
   ```

### Configuration

Replace the example secret key in `frontend/src/utils/solana.js` with your actual Solana secret key.

### License

This project is licensed under the MIT License.