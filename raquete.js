class Raquete {
    constructor(c, teclado) {
        this.c = c
        this.teclado = teclado
        this.width = 20
        this.height = 100
        this.x = 0
        this.y = (hCanvas / 2) - this.height/2
        this.v = 3
    }

    gerenciar() {

        if (this.teclado.esquerda) {
            if (this.x > 0) {
                this.x -= this.v
            }
        }

        if (this.teclado.direita) {
            if (this.x < (wCanvas / 2) - this.width)
            this.x += this.v
        }

        if (this.teclado.cima) {
            if (this.y > 0) {
                this.y -= this.v
            }
            
        }

        if (this.teclado.baixo) {
            if (this.y < hCanvas - this.height) { 
                this.y += this.v
            }
           
        }

    }

    desenhar() {

        this.gerenciar()
        this.c.fillStyle = 'black'
        this.c.fillRect(this.x, this.y, this.width, this.height)
        
    }

}