class Player
{
    constructor(index)
    {
        this.index = index;
        this.atTile = 0;
        this.pawn = document.getElementsByClassName("pawn" + index)[0];
        this.pawn.style.display = "block";
    }
}
class Tile
{
    constructor(div)
    {
        this.div = div;
        this.goto = -1;
    }
}
class Game
{   
    constructor(div)
    {
        this.selectplayersDiv = document.getElementsByClassName("selectPlayers")[0];
        this.winnerDiv = document.getElementsByClassName("winner")[0];
        this.playerturnDiv = document.getElementsByClassName("playerTurn")[0];
        this.rollDiv = document.getElementsByClassName("roll")[0];
        this.mainDiv = document.getElementsByClassName("main")[0];
        this.boardDiv = document.getElementsByClassName("board")[0];
        this.boardoverlayDiv = document.getElementsByClassName("selectPlayers")[0];

        this.tites = [];
        this.players = [];
        this.playerTurn = 0
    }
}