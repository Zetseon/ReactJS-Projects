import classes from './CharacterDisplay.module.css'
function CharacterCard(props) {
    const handleClick = () => {
        // Execute the desired logic when the card is clicked
        // You can access the card's data through the `props` object
        props.onClick(props.data);
        console.log(props.data)
        // You can also pass the card's data to a parent component by invoking a callback function
        // Example: props.onClick(props.data);
    };
    return (
        <div className={classes.CharacterCard}>
            {props.children}
        </div>
    );
}
export default CharacterCard;