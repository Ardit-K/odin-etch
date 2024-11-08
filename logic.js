let container = document.querySelector(".container");
for (let i = 0; i < 16; i++){
    let d = document.createElement("div");
    d.setAttribute("class", "box");
    container.appendChild(d);
}