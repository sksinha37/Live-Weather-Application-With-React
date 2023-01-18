import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from './components/About';
import "./css/bootstrap.min.css";
import "./css/style.css"
import Home from "./components/Home";
import WeatherNews from './components/WeatherNews';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="weather" element={<WeatherNews />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;