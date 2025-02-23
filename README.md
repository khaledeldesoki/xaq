# Stream Payment Salary

This project implements a salary payment streaming system using React and Solana. The system ensures employees only get paid if they complete their tasks. It is designed to be tested locally without using real money.

## Features

- Stream payment using Superfluid or Sablier
- Task management system
- Conditional payment based on task completion
- User-friendly interface with React components

## Prerequisites

- Node.js
- Solana CLI
- GitHub Codespaces

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/yourusername/stream-payment-salary.git
cd stream-payment-salary
```

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
npm start
```

The project will run locally at `http://localhost:3000`.

### Using GitHub Codespaces

1. Open the repository on GitHub.
2. Click on the `Code` button and select `Open with Codespaces`.
3. Create a new Codespace and wait for it to initialize.
4. The project will be ready to run in the Codespace environment.

## Project Structure

```plaintext
stream-payment-salary/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── TaskList.js
│   │   ├── PaymentStatus.js
│   ├── services/
│   │   ├── paymentService.js
│   │   ├── taskService.js
│   ├── App.js
│   ├── index.js
├── .gitignore
├── package.json
├── README.md
```

## License

This project is licensed under the MIT License.