import { useContext } from 'react';
import FavouritesContext from '../components/store/favourites-context';
import MeetUpList from '../components/meetups/MeetUpList';

function Favourites() {
    const favoriteContext = useContext(FavouritesContext);

    let content;

    if (favoriteContext.totalFavourites === 0) {
        content = <p>You got no Favourites yet. Start Adding some?</p>
    } else {
        content = <MeetUpList meetups={favoriteContext.favourites} />
    }

    return (<section>
        <h1>My Favourite</h1>
        {content}
    </section>);
}
export default Favourites;