let cartaContainer = document.querySelector('.card')

window.onload = function (){
    // array con pintas y cartas
    let pintas = ["\u2660", "\u2663", "\u2665", "\u2666"]
    let cartas = ["K", "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q"]
   
    //genera pinta random dado un array
    function pintaRandom(){
        let numeroRandom = Math.floor(Math.random() * 4)
        return pintas[numeroRandom]
    }
   
    //genera carta random dado un array
    function cartaRandom(){
       let numeroRandom = Math.floor(Math.random() * 13)
       return cartas[numeroRandom]
    }

    //call a funciones
    let pinta = pintaRandom()
    let carta = cartaRandom()

    //pinta top
    let top = document.createElement("div");
    let topContent = document.createTextNode(pinta);
    top.appendChild(topContent);
    cartaContainer.appendChild(top);
    if (pinta == "\u2665" || pinta == "\u2666"){
        top.classList.add('rojotop')
    } else if (pinta == "\u2660" || pinta == "\u2663"){
        top.classList.add('negrotop')
    }

    //numero centro
    let center = document.createElement("div");
    let centerContent = document.createTextNode(carta);
    center.appendChild(centerContent);
    cartaContainer.appendChild(center);
    if (pinta == "\u2665" || pinta == "\u2666"){
        center.classList.add('cartaroja')
    } else if (pinta == "\u2660" || pinta == "\u2663"){
        center.classList.add('cartanegra')
    }
    
    //pinta bottom
    let bottom = document.createElement("div");
    let bottomContent = document.createTextNode(pinta);
    bottom.appendChild(bottomContent);
    cartaContainer.appendChild(bottom);
    if (pinta == "\u2665" || pinta == "\u2666"){
        bottom.classList.add('rojobottom')
    } else if (pinta == "\u2660" || pinta == "\u2663"){
        bottom.classList.add('negrobottom')
    }
 }


