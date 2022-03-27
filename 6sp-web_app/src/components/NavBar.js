import { Link } from 'react-router-dom';

import classes from './NavBar.module.css';

function NavBar(){
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <div className={classes.hometitle}>HEART DISEASE PREDICTOR</div>
                    </li>
                    <li>
                        <Link to="">Features</Link>
                    </li>
                    <li>
                        <Link to="">Pricing</Link>
                    </li>
                    <li>
                        <Link to="">Contact</Link>
                    </li>
                    <li></li>
                    <li></li>
                    <li className={classes.login}>
                        <Link to="/login">Log In</Link>
                    </li>
                    <li></li>
                    <button>
                        <Link to="/registration">Create Account</Link>
                    </button>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
