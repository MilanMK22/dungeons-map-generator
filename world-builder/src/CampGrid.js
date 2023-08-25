import React, {useEffect} from 'react';
import './Grid.css';

import { allImages } from './Constants';
import { campCords } from './CalculatePositions';

const CampGrid = () => {

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
                        left: `${(image.x * 4 + 10 - (image.angle/15)) * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scale-factor'))}vw`,
                        top: `${image.y * 4 * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scale-factor'))}vw`,
                        width: `${image.width * 4 * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scale-factor'))}vw`,
                        height: `${image.height * 4 * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--scale-factor'))}vw`,
                    }}
                />
            ))}
        </div>
    );    
};

export default CampGrid;