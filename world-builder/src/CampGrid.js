import React, {useEffect} from 'react';
import './Grid.css';

import { allImages } from './Constants';
import { campCords } from './CalculatePositions';

const CampGrid = ({scaleFactor}) => {

    const imageMapping = {
        19: allImages.campImages.tent_1x2,
        20: allImages.campImages2x2.tent_2x2_2,
        21: allImages.campImages.campfire,
        22: allImages.campAccessory.bedroll,
        23: allImages.campImages2x2.tent_2x2_1,
    };
    
    return (
        <div className="grid-container-camp">
            {campCords.map((image, index) => (
                <img
                    src={imageMapping[image.src]}
                    alt={`Image ${index + 1}`}
                    style={{
                        transform: `rotate(${image.angle}deg)`,
                        position: 'absolute',
                        left: `${(image.x * 4 + 10 - (image.angle/15)) * scaleFactor}vw`,
                        top: `${image.y * 4 * scaleFactor}vw`,
                        width: `${image.width * 4 * scaleFactor}vw`,
                        height: `${image.height * 4 * scaleFactor}vw`,
                    }}
                />
            ))}
        </div>
    );    
};

export default CampGrid;