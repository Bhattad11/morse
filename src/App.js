import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './screens/Dashboard';
import About from './screens/About';
function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
             <Route path="/about" element={<About />} />
          </Routes>
    </Router>
  );
}

export default App;
