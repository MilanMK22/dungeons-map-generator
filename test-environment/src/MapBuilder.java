import QuadrantBuilder;

public class MapBuilder {

    int[][] map;

    QuadrantBuilder qb;

    /**
     * Generates a full-sized array map.
     * 
     * This is done by creating a 3 by 2 map of pre-generated sections.
     */
    public MapBuilder() {
        
        // 81 and 54 represents a 3 x 2 formation of 27 by 27 blocks.
        this.map = new int[81][54];

        this.qb = new QuadrantBuilder();
    }

    /**
     * Creates a new map, and saves over top of the existing map.
     * 
     * Uses six tiles fetched from the Quadrant Builder function.
     */
    public void createMap() {

        int currentRow = 0;
        int currentColumn = 0;

        // Create two rows
        for (int i=0; i<2; i++) {

            // Create three columns
            for (int j=0; j<3; j++) {

                int[][] newSection = qb.getQuadrant(27, 5);

                for (int row=currentRow; row<27; row++) {
                    for (int col=currentColumn; col<27; col++) {
                        map[row][col] = newSection[row][col];
                    }
                }

                currentColumn += 27;
            }

            currentRow += 27;
        }

        qb.printMap(map);
    }

    /**
     * Returns the current map.
     */
    public int[][] getMap() {
        return this.currentMap;
    }
}

