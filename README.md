# FinTrack - Personal Finance Manager

## 📌 Overview
FinTrack is a modern **Personal Finance Management** application designed to help users track their expenses, manage their income, analyze spending habits, and set budgets. The app features an intuitive UI, robust backend, and real-time analytics.

## 🚀 Features
- **User Authentication**: Secure login/signup with validations.
- **Transaction Management**: Add, edit, and delete income/expense transactions.
- **Expense Categorization**: Categorize transactions for better organization.
- **Filters & Search**: Easily find transactions based on category, date, or amount.
- **Budget Planning**: Set monthly budgets and track progress.
- **Analytics Dashboard**: View spending patterns and financial insights.
- **Dark Mode & Theme Customization**.

## 🛠️ Tech Stack
### **Frontend:**
- **React.js** (with Bootstrap & CSS for styling)
- **Context API** (for state management)

### **Backend:**
- **Node.js & Express.js** (RESTful API development)
- **MongoDB** (database for storing transactions & user data)

## 📂 Project Structure
```
FinTrack/
│── backend/              # Backend code (Node.js, Express, MongoDB)
│── frontend/             # Frontend code (React.js, Bootstrap, CSS)
│── database/             # MongoDB connection & models
│── routes/               # API routes (Auth, Transactions, User)
│── public/               # Static assets
│── src/                  # Main source code (frontend components)
│── README.md             # Project documentation
│── package.json          # Dependencies & scripts
```

## 🚀 Getting Started
### **1. Clone the Repository**
```sh
git clone https://github.com/Parthahs19/P4-weekone-milestone.git
cd FinTrack
```

### **2. Install Dependencies**
#### **Backend**
```sh
cd backend
npm install
```
#### **Frontend**
```sh
cd frontend
npm install
```

### **3. Setup Environment Variables**
Create a `.env` file in the `backend` directory and add:
```sh
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### **4. Run the Application**
#### **Start Backend**
```sh
cd backend
npm run dev
```
#### **Start Frontend**
```sh
cd frontend
npm start
```
The application will be available at **http://localhost:3000**

## 📝 API Endpoints
| Method | Endpoint | Description |
|--------|---------|-------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login` | User login |
| GET    | `/api/transactions` | Fetch all transactions |
| POST   | `/api/transactions` | Add a new transaction |
| DELETE | `/api/transactions/:id` | Delete a transaction |

## 📌 Future Enhancements
- **Graph-based analytics for income & expenses**
- **Recurring transaction reminders**
- **Multi-currency support**
- **AI-based expense prediction**

## 🤝 Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📩 Contact
For any queries, reach out to **Partha H S** at [GitHub](https://github.com/Parthahs19).
