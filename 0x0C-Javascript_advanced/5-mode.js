function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.transform = transform;
        document.body.style.background= background;
        document.body.style.color = color;
    }
}

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitamize", "black", "white", );
    let screamMode = changeMode(12, "normal", "lowecase", "white", "black")
    let p = document.createElement("p");
    p.document.createTextNode("Welcome Holberton!");
    let button1 = document.createElement("button");
    button1.createTextNode("Spooky");
    let button2 = document.createElement("button");
    button2.createTextNode("Dark mode");
    let button3 = document.createElement("button");
    button3.createTextNode("Scream mode");
    button1.addEventListener("click", spooky);
    button2.addEventListener("click", darkMode);
    button3.addEventListener("click", screamMode);
}

main();
