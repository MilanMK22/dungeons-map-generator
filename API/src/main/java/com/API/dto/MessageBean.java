package com.API.dto;

public class MessageBean {
    private long id;
    private String world;
    private boolean roofs;
    private boolean caves;
    private int players;
    private double x;
    private double y;

    public long getId() {
        return id;
    }

    public boolean getCaves() {
        return caves;
    }

    public boolean getRoofs() {
        return roofs;
    }

    public String getWorld() {
        return world;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setWorld(String world) {
        this.world = world;
    }

    public void setRoofs(boolean roofs) {
        this.roofs = roofs;
    }

    public void setCaves(boolean caves) {
        this.caves = caves;
    }

    public void setPlayers(int players) {
        this.players = players;
    }

    public int getPlayers() {
        return players;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getX() {
        return x;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getY(){
        return y;
    }
    
}