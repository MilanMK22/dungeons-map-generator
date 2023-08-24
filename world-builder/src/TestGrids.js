const grid1 = [
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

const grid2 = [
    [0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 4, 4, 3],
    [2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 3],
    [2, 2, 1, 0, 0, 0, 0, 0, 0, 1, 12, 12, 12, 12, 12, 12, 12, 12, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 12, 12, 12, 12, 12, 12, 12, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 2, 0, 0, 0, 0, 1, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 2, 0, 0, 0, 0, 0, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 0, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 1, 0, 2, 2, 1, 0, 0, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0],
    [2, 2, 0, 1, 2, 2, 0, 0, 0, 11, 11, 11, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11, 11, 0, 0, 0, 0, 0, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
    [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
    [2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 5, 5]
];

const grid3 = [
    [0, 1, 2, 2, 0, 0, 0, 2, 2, 0, 2, 2, 0, 0, 0, 0, 0, 1, 2, 2],
    [2, 2, 2, 2, 1, 3, 0, 2, 2, 1, 2, 2, 1, 0, 0, 0, 0, 3, 2, 2],
    [2, 2, 1, 0, 0, 1, 2, 2, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0],
    [1, 0, 18, 18, 18, 18, 2, 2, 0, 0, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0],
    [2, 2, 18, 18, 18, 18, 0, 1, 0, 18, 18, 18, 18, 18, 18, 0, 1, 0, 0, 0],
    [2, 2, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 0, 0],
    [0, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 0, 0],
    [0, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 0, 0],
    [0, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 0, 0],
    [1, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 1, 0],
    [0, 0, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 2, 2, 1],
    [0, 0, 3, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 0, 0, 2, 2, 0],
    [0, 1, 0, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 1, 0, 0, 0, 0],
    [2, 2, 1, 0, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 1, 0, 0, 0, 0, 0],
    [2, 2, 0, 1, 18, 18, 18, 18, 18, 18, 18, 18, 18, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 2, 2, 0, 1, 18, 18, 18, 18, 0, 1, 2, 2, 0, 0, 3, 4, 0],
    [0, 2, 2, 2, 2, 1, 0, 0, 1, 18, 18, 0, 1, 2, 2, 1, 0, 0, 4, 0],
    [1, 2, 2, 0, 0, 0, 0, 1, 0, 0, 0, 2, 2, 1, 0, 2, 2, 0, 0, 0],
    [2, 2, 0, 1, 0, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 1],
    [2, 2, 1, 0, 3, 2, 2, 1, 0, 0, 0, 1, 0, 2, 2, 0, 0, 1, 0, 0]
];

const grid4 = [
    [0, 1, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 4, 4, 3],
    [2, 2, 2, 2, 0, 0, 0, 0, 0, 1, 2, 2, 1, 0, 1, 0, 2, 2, 0, 0],
    [2, 2, 1, 0, 1, 2, 2, 0, 0, 1, 0, 0, 0, 0, 2, 2, 2, 2, 1, 0],
    [1, 15, 15, 15, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 1, 1, 0, 1, 0],
    [0, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 1, 0, 0],
    [0, 15, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0],
    [0, 15, 15, 15, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 15, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0],
    [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 0, 3, 0, 0],
    [0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 0, 0, 0],
    [0, 1, 0, 1, 3, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0],
    [2, 2, 1, 0, 2, 2, 1, 0, 0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0],
    [2, 2, 0, 1, 2, 2, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 17, 17, 17, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 17, 17, 17, 17, 17, 17, 17, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 17, 17, 17, 17, 17, 4, 0, 0, 1],
    [2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
    [2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2]
];

export{
    grid1,
    grid2,
    grid3,
    grid4,
};