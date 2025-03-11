import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import TransactionProvider from "./context/TransactionContext";  
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Features from "./pages/Features";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./pages/Contact";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <TransactionProvider> {/* Wrap here */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />}/>
            {/* <Route path="/dashboard" element= {<ProtectedRoute><Dashboard/></ProtectedRoute>} /> */}
            <Route path="/dashboard" element= {<Dashboard/>} />
            <Route path="/features" element = {<Features/>} />
            <Route path="/about" element = {<About/>} />
            <Route path="/contact" element = {<Contact/>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Routes>
        </Router>
      </TransactionProvider>
    </AuthProvider>
  );
}

export default App;


