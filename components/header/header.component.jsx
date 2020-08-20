import React from 'react';
import './header.style.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase'
import { ReactComponent as Logo} from '../../assets/crown.svg'
const Header=({currentUser}) =>(
    <div className='header'>
        <Link classname='logo-container' to="/">
               <Logo className='logo'/> 
        </Link>
        <div className='options'>
            <Link  className='option' to='/Contact'>Contact</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut() }>Sign out</div>

                :

                <Link className='option' to='/sign'> Sign in</Link>
            }
        </div>
        
    </div>
);
export default Header;