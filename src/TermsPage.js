import './App.css';
import { useEffect } from 'react';
import Terms from './Terms';
import { Link } from "react-router-dom";

function TermsPage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="App">
    <div className="Privacy-header">
      {/* <img src={privacyicon} alt="privacy" className='App-store-button' /> */}
      <Terms/>
    </div>

    <header className="App-footer">
      <Link  to={{pathname: '/'}}>home</Link>
      <Link  to={{pathname: '/faq'}}>faq</Link>
      <Link  to={{pathname: '/privacy'}}>privacy</Link>
      <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" >contact</a>
    </header>
  </div>
  );
}

export default TermsPage;