import CharacterCard from "../ui/CharacterDisplay";
import classes from "./CharacterItem.module.css";
function CharacterItem(props) {
    const characterInfo = props.props.node;
    const voiceActorInfo = props.props.voiceActors[0];
    return (
        <li className={classes.li}>
            <CharacterCard>
                <div className={classes.character}>
                    <img src={characterInfo.image?.medium}></img>
                    <p>{characterInfo.name.full}</p>
                </div>
                <div className={classes.voiceActor}>
                    <img src={voiceActorInfo?.image?.medium}></img>

                    <p>{voiceActorInfo?.name.full}</p>
                </div>
            </CharacterCard>
        </li>
    );
}
export default CharacterItem;
