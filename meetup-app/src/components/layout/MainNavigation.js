import { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavouritesContext from '../store/favourites-context';

import classes from './MainNavigation.module.css';

function MainNavigation(){
    const favouritesContext = useContext(FavouritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}> React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetups'>New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>
                            Favourites Meetups
                            <span className={classes.badge}>{favouritesContext.totalFavourites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;