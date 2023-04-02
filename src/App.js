import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/footer/Footer";
import Help from "./components/help/Help";
import Docs from "./components/docs/Docs";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/docs" element={<Docs />} />
        {/* If no Routes found, it renders to the NotFound component */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
