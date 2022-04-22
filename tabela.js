
var button = window.document.querySelector("button#button")
button.addEventListener("click", tabela)


function tabela(){
	var wiersz = window.document.querySelector("input#wiersz");
	var kolumna = window.document.querySelector("input#kolumna");
	var section4 = window.document.querySelector('section#section4')
	var tabela = window.document.querySelector("div#tabela")
	let wierszW = wiersz.value.trim()
	let kolumnaW = kolumna.value.trim()
	
	

	for (let i = 1; i <= wierszW; i++) {
      for (let j = 1; j <= kolumnaW; j++) {
        let kwadrat = window.document.createElement("tabela")
        kwadrat.classList.add("kwadrat")
        kwadrat.style.left = `${j * 40}px`
        kwadrat.style.top = `${i * 40}px`
		
        kwadrat.innerHTML = i * j

        tabela.appendChild(kwadrat)

        if (i == j) {
          kwadrat.classList.add('przekatna')
        }
      }
	  
}
}