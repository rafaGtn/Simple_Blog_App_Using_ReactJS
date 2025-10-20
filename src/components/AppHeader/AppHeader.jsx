import { Link } from 'react-router-dom';
import './AppHeader.css';


function AppHeader() {
    return (
        <header className='header'>
                <ul className='navMenu'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
        </header>
    );
}

export default AppHeader;