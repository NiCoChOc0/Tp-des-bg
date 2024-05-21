render() ;
//votre code :
function render() {
    document.getElementById("app").innerHTML = `
    <h1>Constatez la nature monothreadée de JS </h1>
    <h4 style="display:inline">Changez la couleur :</h4>
    <button id="color_btn" class="yellow" >Yellow</button>
    <br>
    <div>
        <button id="res_btn">Execute</button>
        <div id ="results"></div>
    </div>
    <h3>Choisissez le nombre d'itérations désiré pour simuler un calcul lourd et
    ensuite cliquez sur "run":</h3>
    <h4> En principe, le carré cesse de bouger pendant un laps de temps avant de se
    reprendre</h4>
    <div>
        <label>Iterations</label>
        <input
            type="range"
            min="0"
            max="30000"
            value="0"
            id="iterations_slider" />
        <span id="iterations_count">0</span>
        <button id="run_btn">Run</button>
    </div>
    <div class="circle"></div>
    <div class="square"></div>
    `;
}

// EX 1
function changeColor(event){
    let colors = ["yellow", "blue", "red"];

    color_index++;
    if (color_index >= colors.length){
        color_index=0;
    }
    color_btn.textContent = colors[color_index].charAt(0).toUpperCase() + colors[color_index].slice(1);
    color_btn.className = colors[color_index];
}
let color_index = 0;
let color_btn = document.getElementById("color_btn");
color_btn.addEventListener('click', changeColor);

// EX 2
let iterations_count = document.getElementById('iterations_count');
let iterations_slider = document.getElementById('iterations_slider');
iterations_slider.addEventListener("input", e=>iterations_count.textContent = e.target.value);

// EX 3
let run_btn = document.getElementById("run_btn");

run_btn.addEventListener('click', e=>{
    for (i=0; i<=iterations_slider.value; i++){
        console.log(i);
    }
});

// EX 4
let circle = document.getElementsByClassName("circle")[0];
let square = document.getElementsByClassName("square")[0];
function moveItem(item){
    let new_margin_value = +(item.style.marginLeft.slice(0, -2)) + 1;

    if (new_margin_value + item.style.width >= document.body.clientWidth){
        new_margin_value = 0;
    }

    item.style.marginLeft = new_margin_value + "px";
}
setInterval(moveItem, 10, circle);
setInterval(moveItem, 10, square);

// EX Bonus
let res_btn = document.getElementById("res_btn");
let results = document.getElementById("results");
let tab = [10,20,15,5];
function sum(acc, nb){
    return acc + nb;
}
results.textContent = "Somme : " + tab.reduce(sum, 0);