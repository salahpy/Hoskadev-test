import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CoursePage from './pages/CoursePage'; // Import the new CoursePage
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course/:id" element={<CoursePage />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
