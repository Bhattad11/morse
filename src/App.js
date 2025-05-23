import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import About from './screens/About';
import PrivacyPolicy from './screens/PrivacyPolicy';
import TermsAndConditions from './screens/TermsAndConditions';
import PageNotFound from './screens/PageNotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactUs from './screens/ContactUs';
import ContactNotificationList from './screens/ContactNotificationList';

function AppContent() {
  const location = useLocation();
  const hideHeaderPaths = ['/']; // Add any other paths you don't want the header on
const hideFooter=['/admin-get-morse-contact-details','/contactUs',"/terms-and-conditions",'/privacy-policy']
  const shouldShowHeader = !hideHeaderPaths.includes(location.pathname);
const shouldShowFooter=!hideFooter.includes(location.pathname)
  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/admin-get-morse-contact-details" element={<ContactNotificationList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {shouldShowFooter &&  <Footer/>}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
