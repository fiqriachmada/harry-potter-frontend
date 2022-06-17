import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CharacterDetail from "./features/CharacterDetail";
import Character from "./pages/Character";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/characters" element={<Character />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/characters/:id" element={<CharacterDetail />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
