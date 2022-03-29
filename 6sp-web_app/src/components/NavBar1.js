import { Link } from 'react-router-dom';

import classes from './NavBar.module.css';

function NavBar1(props){
    return(
        <><meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <header className={classes.header}>
            <nav>
                <ul>
                    <li></li>
                    <li>
                        <div className={classes.hometitle}>HEART DISEASE PREDICTOR</div>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                        <Link to={props.link1} className={classes.small_links}>{props.link1_name}</Link>
                    </li>
                    <li>
                        <Link to={props.link2} className={classes.small_links}>{props.link2_name}</Link>
                    </li>
                    <li>
                        <Link to={props.link3} className={classes.small_links}>{props.link3_name}</Link>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li>
                        <Link to={props.link4} className={classes.links}>{props.link4_name}</Link>
                    </li>
                    <li></li>
                    <button className={classes.button}>
                        <Link to={props.link5} className={classes.text}>{props.link5_name}</Link>
                    </button>
                </ul>
            </nav>
        </header></>
    );
}

export default NavBar1;
