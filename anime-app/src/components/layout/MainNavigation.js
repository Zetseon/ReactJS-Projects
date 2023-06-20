import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logoImage from "./logo.png";

//Navigation Bar links
function MainNaivation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logoImage} alt="Website Logo" />
                Website
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Anime">Anime</Link>
                    </li>
                   
                </ul>
            </nav>
            
        </header>
    );
}
export default MainNaivation;
