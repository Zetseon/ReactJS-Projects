import classes from "../ui/DisplayCard.module.css";

//Card to hold Anime data
function MediaDisplayCard(props) {
    const handleClick = () => {
        // Execute the desired logic when the card is clicked
        // You can access the card's data through the `props` object
        props.onClick(props.data);
        console.log(props.data)
        // You can also pass the card's data to a parent component by invoking a callback function
        // Example: props.onClick(props.data);
    };
    return (
        <div className={classes.MediaDisplayCard} onClick={handleClick}>
            {props.children}
        </div>
    );
}
export default MediaDisplayCard;
