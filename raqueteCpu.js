class Cpu {
    constructor(c, bola) {

        this.c = c
        this.bola = bola
        this.width = 20
        this.height = 100
        this.x = (wCanvas - this.width)
        this.y = (hCanvas / 2) - (this.height / 2)
        this.v = 3
        this.inicioX = this.x
        this.inicioY = this.y
        this.yMeio = Math.random() * this.height

    }

    gerenciar() {

        if (this.bola.directionX > 0 && this.bola.x > wCanvas / 2) {

            //Rebater a bola
            if  (this.bola.y + (this.bola.height / 2) > this.y + this.yMeio) {

                this.y += this.v

            }

            if (this.bola.y + (this.bola.height / 2) < this.y + this.yMeio) {

                this.y -= this.v

            }

            if (this.bola.x + this.bola.height < this.x) {

                this.x -= this.v

            }

        } else {

            // Ir para a posição de origem
            if (this.y > this.inicioY) {

                this.y -= this.v
            }

            if (this.y < this.inicioY) {

                this.y += this.v

            }

            if (this.x > this.inicioX) {

                this.x -= this.v

            }

            if (this.x < this.inicioX) {

                this.x += this.v

            }

        }
        // Colisão com a raquete
        if ((this.x <= this.bola.x + this.bola.width && this.x + this.width >= this.bola.x) &&
            (this.y + this.height >= this.bola.y && this.y <= this.bola.y + this.bola.height)) {

                this.bola.directionX *= -1
                this.bola.directionY = (((this.y + (this.height / 2)) - (this.bola.y + (this.bola.height / 2))) / 16)
                this.yMeio = Math.random() * this.height

        }
    }

    desenhar() {

        this.gerenciar()
        this.c.fillStyle = 'black'
        this.c.fillRect(this.x, this.y, this.width, this.height)
        
    }

}