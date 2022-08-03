class Placar {
    constructor(c) {
        this.c = c
        this.left = 0
        this.right = wCanvas
        this.margin = 10
        this.width = 100
    }

  
    desenhar() {
        this.c.font = "70px arial"
        this.c.fillStyle = 'black'
        this.c.fillText(pointsPlayer1, this.left + this.margin, this.margin + 70, this.width)
        this.c.fillText(pointsPlayer2, this.right - this.width - this.margin, this.margin + 70, this.width)
    }

}