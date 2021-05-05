import './navbar.css';
import { FaCode } from 'react-icons/fa';
import MenuIcon from '../images/icons8-menu.json';

const Navbar = () => {
    return (
        <div className='nav-menu'>
            <div className='nav'>
                <span className='nav-logo'><FaCode size='1.6em' alt='Source Code Icon' /></span>
                <ul className='nav-ul'>
                    <li className='nav-ul-li'><a href='#my-services'>&#60;Services /&#62;</a></li>
                    <li className='nav-ul-li'><a href='#aboutme'>&#60;About Me /&#62;</a></li>
                    <li className='nav-ul-li'><a href='#projects'>&#60;Projects /&#62;</a></li>
                    <li className='nav-ul-li'><a href='#footer'>&#60;Social Media /&#62;</a></li>
                </ul>
            </div>
            <div className='res-menu'>
                <button 
                        style={{
                            color: 'black',
                            backgroundColor: 'rgb(70, 175, 115)',
                            border: 'none',
                            padding: '0',
                            margin: '0 30px',
                            fontSize: '40px',
                        }}
                        >
                    <img src={MenuIcon} alt='Drop down menu icon'/>
                </button>
            </div>
        </div>
    )
}

export default Navbar;