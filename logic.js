let container = document.querySelector(".container");
for (let i = 0; i < 4; i++){
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 4; j++){
        let d = document.createElement("div");
        d.classList.add("box");
        d.addEventListener('mouseover', ()=>{
            d.style.backgroundColor = 'black';
        });
        row.appendChild(d);
    }
    container.appendChild(row);
}