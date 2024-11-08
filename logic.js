let container = document.querySelector(".container");

const newGrid = () => {
    let squares = prompt("Enter number of squares per side (maximum 100): ");
    if (squares > 100) newGrid();
    container.innerHTML = '';
    for (let i = 0; i < squares; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < squares; j++){
            let d = document.createElement("div");
            d.classList.add("box");
            d.addEventListener('mouseover', ()=>{
                d.style.backgroundColor = `rgb(
                ${(Math.random() * 1000) % 255},
                ${(Math.random() * 1000) % 255},
                ${(Math.random() * 1000) % 255})`
            });
            row.appendChild(d);
        }
        container.appendChild(row);
    }
}