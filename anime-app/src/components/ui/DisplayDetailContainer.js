import react, {useState} from 'react';
import MediaDisplayCard from './DisplayCard';
import DetailOverlay from './DetailOverlay;'
function DisplayDetainContainer(){
    const[showOverlay,setShowOverlay] = useState(false);
    const[selectedCardData, setSelectedCardData]=useState(null)
    const handleCardClick = (cardData) => {
        setSelectedCardData(cardData);
        setShowOverlay(true);
    };

    const handleOverlayClose = () => {
        setShowOverlay(false);
        setSelectedCardData(null);
    };
    return(
        <div>
            {showOverlay && (
                <Overlay data={selectedCardData} onClose={handleOverlayClose} />
            )}

            <MediaDisplayCard
                data={cardData1}
                onClick={handleCardClick}
            />
            <MediaDisplayCard
                data={cardData2}
                onClick={handleCardClick}
            />
            {/* Render more MediaDisplayCard components with different data */}
        </div>
    )
}