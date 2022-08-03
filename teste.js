const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

let direita, esquerda, cima, baixo, wCanvas, hCanvas;

direita = esquerda = cima = baixo = false

hCanvas = canvas.clientHeight
wCanvas = canvas.clientWidth

const teclado = {
     cima: false,
     baixo: false,
     direita: false,
     esquerda: false
}

let pointsPlayer1, pointsPlayer2;
pointsPlayer1 = pointsPlayer2 = 0

const raquete = new Raquete(c, teclado)

const bola = new Bola(c, raquete)

const cpu = new Cpu(c, bola)

const placar = new Placar(c)


window.addEventListener('keydown', e => {

     let tecla = e.key

     if (tecla === "ArrowUp") {

          teclado.cima = true

     } else if (tecla === "ArrowDown") {

          teclado.baixo = true
     }

     if (tecla === "ArrowLeft") {

          teclado.esquerda = true

     } else if (tecla === "ArrowRight") {

          teclado.direita = true

     }

})

window.addEventListener('keyup', e => {

     let tecla = e.key

     if (tecla === "ArrowUp") {

          teclado.cima = false

     } else if (tecla === "ArrowDown") {

          teclado.baixo = false
     }

     if (tecla === "ArrowLeft") {

          teclado.esquerda = false

     } else if (tecla === "ArrowRight") {

          teclado.direita = false
     }

})

window.addEventListener('keydown', (event) => {
     
     let tecla = event.key
     
     if (tecla === "Enter") {
          
          bola.iniciar()
     }
     
})

const game = () => {

     c.clearRect(0, 0, wCanvas, hCanvas)
     raquete.desenhar()
     bola.desenhar()
     cpu.desenhar()
     placar.desenhar()
     
     requestAnimationFrame(game)

}

requestAnimationFrame(game)

   



    



