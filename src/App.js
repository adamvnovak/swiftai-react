import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LandingPage from './LandingPage';
import TermsPage from './TermsPage';
import FaqPage from './FaqPage';
// import { Link } from "react-router-dom";
import PrivacyPage from './PrivacyPage';
import RedirectPage from './RedirectPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/download" element={<RedirectPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
