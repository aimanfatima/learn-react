import Card from "../ui/Card";
import { useContext } from "react";
import classes from "./MeetUpItem.module.css";
import FavouritesContext from "../store/favourites-context";

function MeetUpItem(props) {
  const favoriteCtx = useContext(FavouritesContext);

  const itemIsFavourite = favoriteCtx.itemsIsFavourite(props.id);
  function toggleFavoriteStatusHandler() {
    if (itemIsFavourite) {
      favoriteCtx.removeFavorite(props.id)
    } else {
      favoriteCtx.addFavorite({
        id: props.id, 
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      })
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>{itemIsFavourite ? 'Remove from favourite' : 'Add to Favourite'}</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetUpItem;
