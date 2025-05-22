import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import About from './screens/About';
import PrivacyPolicy from './screens/PrivacyPolicy';
import TermsAndConditions from './screens/TermsAndConditions';
import PageNotFound from './screens/PageNotFound';
function App() {
  return (
    <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
             <Route path="/about" element={<About />} />
             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
             <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
             <Route path="*" element={<PageNotFound />} />

          </Routes>
    </Router>
  );
}

export default App;
