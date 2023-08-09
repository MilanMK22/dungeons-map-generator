import React from 'react';
import './Grid.css';

import grass from './assets/forest/grass1.jpg';
import path from './assets/paths/path_light.jpg';
import floor from './assets/paths/path_dark.jpg';
import stone_floor from './assets/caves/floor_light.jpg';
import cave_floor from './assets/caves/floor_dark.jpg';
import bush from './assets/forest/bush1.png';
import rock from './assets/rocks/sml_rock1.png';
import water from './assets/water/water.jpg';
import tent from './assets/camp/2x2_tent_1.png';
import campfire from './assets/camp/campfire.png';

const Grid = () => {
    const grid = [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,5,1,1,1,1,1,1,1,1,1,1,6,1,3,3,3,1,1,1],
        [1,1,1,1,1,5,5,5,1,6,1,1,1,1,1,1,6,1,1,3,3,3,1,1,1],
        [1,1,1,1,5,5,5,5,5,1,1,1,9,9,1,6,1,6,3,3,3,3,3,1,1],
        [1,1,1,1,5,5,5,5,5,1,6,1,9,9,1,1,6,1,3,3,3,3,3,1,1],
        [2,1,1,1,5,5,5,5,5,1,1,1,9,9,1,1,1,6,3,3,3,3,3,1,1],
        [2,2,1,6,1,5,5,5,1,6,1,1,1,1,1,1,6,1,3,3,3,3,3,1,1],
        [1,2,1,1,1,6,4,1,6,1,9,9,1,10,1,1,1,6,1,3,3,3,1,1,1],
        [1,2,1,1,6,1,4,1,1,6,9,9,1,1,1,1,1,1,1,1,2,1,1,1,1],
        [1,2,1,1,1,6,4,6,1,1,1,1,1,1,1,1,1,1,6,1,2,1,1,1,1],
        [1,2,1,6,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1],
        [1,2,1,1,1,1,2,1,1,1,2,2,2,2,2,2,2,2,2,2,2,1,1,7,1],
        [1,2,1,1,2,2,2,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,7,1,1],
        [1,2,2,2,2,1,1,1,1,1,2,1,1,2,1,1,1,1,1,1,1,1,1,8,1],
        [1,2,1,1,1,1,1,1,2,2,2,1,3,3,1,1,1,1,1,1,1,1,8,8,1],
        [1,2,1,1,1,1,1,1,2,1,1,1,3,3,1,1,1,1,1,1,1,7,8,1,1],
        [1,2,2,1,1,1,2,2,2,1,1,1,3,3,3,3,3,1,1,1,8,8,8,1,1],
        [1,1,2,1,1,1,2,1,1,1,1,1,3,3,3,3,3,1,1,8,8,1,1,1,1],
        [1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,7,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        
    ];

    const imageMapping = {
        1: grass,
        2: path,
        3: floor,
        4: stone_floor,
        5: cave_floor,
        6: bush,
        7: rock,
        8: water,
        9: tent,
        10: campfire,
    };


    return (
        <div className="grid-container">
            {/* Render the grid */}
            {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="grid-row">
                {row.map((cell, columnIndex) => (
                <span key={columnIndex} className="grid-cell">
                    
                    {cell == 0 ? <img key={columnIndex} className="grid-cell" src={imageMapping[1]} alt={`Image ${cell}`} /> : <img key={columnIndex} className="grid-cell" src={imageMapping[cell]} alt={`Image ${cell}`} />}

                    <img key={columnIndex} className="grid-cell" src={imageMapping[cell]} alt={`Image ${cell}`} />
                    
                    
                    
                </span>
                ))}
            </div>
            ))}
        </div>
    );
};

export default Grid;