class Bola {
    constructor(c, raquete) {
        this.c = c
        this.movendo = false
        this.raquete = raquete
        this.directionX = -1
        this.directionY = 0
        this.width = 20
        this.height = 20
        this.x = (wCanvas / 2) - this.width/2
        this.y = (hCanvas / 2) - this.height/2
        this.v = 3
    }

    iniciar() {

        this.movendo = true
        this.directionY = 0

    }

    gerenciar() {

        if (this.movendo) {

            // Movimentação
            this.x += (this.directionX * this.v)
            this.y += (this.directionY * this.v)

            // Colisão com as bordas laterais
            if (this.x >= (wCanvas - this.width)) {
                this.directionX = -1
                pointsPlayer1++
                this.resetarBola()
                this.directionX = -1
            }

            if (this.x <= 0) {
                this.directionX = 1
                pointsPlayer2++
                this.resetarBola()
                this.directionX = 1
            }

            // Colisão com as bordas superiores
            if (this.y >= (hCanvas - this.height)) {
                this.directionY *= -1
            }

            if (this.y <= 0) {
                this.directionY *= -1
            }

            // Colisão com o jogador
            if ((this.x <= this.raquete.x + this.raquete.width && this.x + this.width >= this.raquete.x) &&
               (this.y + this.height >= this.raquete.y && this.y <= this.raquete.y + this.raquete.height)) {

                this.directionX *= -1
                this.directionY = ((-(this.y + (this.height / 2)) + (this.raquete.y + (this.raquete.height / 2))) / 16) // Bateru em cima vai para baixo e vice-versa

            }

        }

    }

    resetarBola() {

        this.movendo = false
        this.x = (wCanvas / 2) - this.width/2
        this.y = (hCanvas / 2) - this.height/2
        raquete.x = 0
        raquete.y = (hCanvas / 2) - (this.raquete.height / 2)
        cpu.x = (wCanvas) - (cpu.width)
        cpu.y = (hCanvas / 2) - (cpu.height / 2)

    }

    desenhar() {

        this.gerenciar()

        this.c.fillStyle = 'black'
        this.c.fillRect(this.x, this.y, this.width, this.height)

    }

}