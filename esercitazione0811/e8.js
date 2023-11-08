

function aggiungilista (){
    const elemento = document.createElement("li")
    elemento.innerText = document.getElementById("input-box").value
    const contenitorelista = document.getElementById("list-container")
    contenitorelista.appendChild(elemento)
   }



const pulsante = document.getElementById("taskinserite")
pulsante.addEventListener("click",aggiungilista)

const taskcomp = function (){
    const sottolinea = document.querySelectorAll("#input-box")
    for(let i = 0; i < sottolinea.lenght ; i++){
        sottolinea[i].addEventListener("click", function () {
            this.classList.toggle("sottolineatura")
        })
    }
}

function rimuoviDaLista(){
    const sceltarimozione = document.getElementById("list-container")
    sceltarimozione.remove(sceltarimozione.selectedIndex)

}




