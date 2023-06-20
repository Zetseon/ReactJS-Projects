import MediaDisplayCard from '../ui/DisplayCard';
import classes from './MediaItem.module.css'
function MediaItem(props){
	const handleMediaClick = () =>{
		props.onMediaClick(props.id);
		console.log(props.id);
	}
    return(
		
        <li className={classes.li}>
			<MediaDisplayCard data={props.id} onClick={handleMediaClick}>
				<div className={classes.imageDiv}>
					<img className={classes?.image} src={props.image} alt="" />
				</div>
				<div className={classes.content}>
					<h3>{props?.titleRomaji}</h3>

				</div>
			</MediaDisplayCard>
		</li>

    )
}
export default MediaItem;