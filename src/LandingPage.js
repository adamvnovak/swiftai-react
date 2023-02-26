import appstorebutton from './download-on-appstore-borderless.png';
import logo from './pixelheart-white-filled.png';
import newlogo from './peoplendots.png'
import './App.css';
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h4></h4>        <h4></h4>
        <h4></h4>

        <h2>
          SwiftAI
        </h2>
        <h6>
          Coming Soon
        </h6>

        <h4></h4>
        {/* <a
          href="https://apps.apple.com/app/apple-store/id1668220280"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={appstorebutton} alt="appstorebutton" className='App-store-button' />
        </a> */}
      </header>

      <header className="App-footer">
        {/* <Link  to={{pathname: '/faq'}}>faq</Link>
        <Link  to={{pathname: '/privacy'}}>privacy</Link>
        <a href="mailto:leaveylabs@gmail.com" target="_blank" rel="noopener noreferrer" >contact</a> */}
      </header>
    </div>
  );
}

export default LandingPage;
