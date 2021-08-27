import { createContext, useState } from 'react';

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemsIsFavourite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavourites, setUserFavourite] = useState([])

    function addFavouriteHandler(favoriteMeetup) {
        setUserFavourite((prevUserFavorite) => {
            return prevUserFavorite.concat(favoriteMeetup);
        });
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourite((prevUserFavorite) => {
            return prevUserFavorite.filter(meetup => meetup.id !== meetupId);
        });
    }
    
    function itemIsFavouriteHandler(meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId);
    }
    
    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavorite: addFavouriteHandler,
        removeFavorite: removeFavouriteHandler,
        itemsIsFavourite: itemIsFavouriteHandler
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;