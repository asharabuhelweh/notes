import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header className ="header">
          <h1>RESTy</h1>
          <nav>
            <div className="na">
              <ul>
            <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                    </ul>
            </div>
               
            </nav>
      </header>
  );
};

export default Header;