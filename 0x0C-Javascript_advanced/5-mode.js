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
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    let p = document.createElement('p');
    p.innerHTML = 'Welcome Holberton!';
    document.body.appendChild(p);
    let button1 = document.createElement("button");
    button1.innerHTML = "Spooky";
    document.body.appendChild(button1);
    button1.addEventListener("click", spooky);
    let button2 = document.createElement("button");
    button2.innerHTML = "Dark Mode";
    document.body.appendChild(button2);
    button2.addEventListener("click", darkMode);
    let button3 = document.createElement("button");
    button3.innerHTML = "Scream Mode";
    document.body.appendChild(button3);
    button3.addEventListener("click", screamMode);
}

main();
