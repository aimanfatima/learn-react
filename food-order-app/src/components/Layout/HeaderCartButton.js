import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart.context";

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const noOfCartItems = cartCtx.items.reduce((currentNo, item) => {
		return currentNo + item.amount;
	}, 0);
	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{noOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
