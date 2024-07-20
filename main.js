window.onload = function() {
function start() {
	var cell_cont = document.getElementById("cell_cont")
	var winBtn = document.getElementById("btn")
	var cell_el = '<div class="cell"></cell>'
	var cell_sub_cont = document.querySelectorAll(".cell_sub_cont")
	var cell = document.querySelectorAll(".cell")
	var back = '<img src="images/background.jpg">'
	var fow = '<img src="images/done.jpg">'
	var winDia = document.getElementById("winDia")

	var num_cells = 12
	var num_sub_cell_cont = 3
	var counter = num_cells / 2

	winBtn.onclick = function() {
		winDia.style.display = "none"
		cell_cont.innerHTML = '<div class="cell_sub_cont"></div><div class="cell_sub_cont"></div><div class="cell_sub_cont"></div>'
		start()
	}

	for(let i = 0; i < num_sub_cell_cont; i++){
		for(let j = 0; j < num_cells/num_sub_cell_cont; j++) {
			cell_sub_cont[i].innerHTML += cell_el
		}
	}

	var cell = document.querySelectorAll(".cell")

	for(let i = 0; i < num_cells; i++){
		cell[i].innerHTML = back
	}

	var firstSet = [
	   "img1.jpg",
	   "img2.jpg",
	   "img3.jpg",
	   "img4.jpg",
	   "img5.jpg",
	   "img6.jpg"
	]

	var secondSet = firstSet.reverse()
	var combinedSets = firstSet.concat(secondSet)

		let temp = []
		for(let i = 0;i < num_cells; i++) {
			let a = Math.floor(Math.random() * (combinedSets.length - 1))
			temp[i] = combinedSets[a]
			combinedSets.splice(a, 1)
		}
		combinedSets = temp
		console.log(combinedSets)

	/*for(let i=0;i<cell.length;i++){
		cell[i].innerHTML = '<img src="'+combinedSets[i]+'">'
	}*/

	var init = ""

	for(let i=0;i<num_cells;i++){
		cell[i].onclick = function(){
		cell[i].innerHTML = '<img src="'+combinedSets[i]+'">'
			if(init === ""){
				init = combinedSets[i]
				cell_num = i
			}else if(combinedSets[i] === init && cell_num !== i) {
				setTimeout(function(){
					cell[cell_num].innerHTML = fow
					cell[i].innerHTML = fow
					cell[cell_num].onclick = null
					cell[i].onclick = null
					init = ""
					cell_num = null;
					counter--
					if (counter === 0){
						setTimeout(function(){
							winDia.style.display = "block"
						}, 300)
					}
				}, 500)
			}else if(cell_num === i){
				cell[i].innerHTML = back
				init = ""
				cell_num = null
			}else{
				setTimeout(function() {
					init = ""
					cell[cell_num].innerHTML = back
					cell[i].innerHTML = back
					cell_num = null
				}, 500)
			}
		}
	}
}
start()
}
