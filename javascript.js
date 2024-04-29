const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.style.color = "red";
redParagraph.textContent = "Hey I'm red!";
container.appendChild(redParagraph);

const blueHeading = document.createElement("h3");
blueHeading.style.color = "blue";
blueHeading.textContent = "I'm a blue h3!";
container.appendChild(blueHeading);

const blackBorder = document.createElement("div");
blackBorder.style.backgroundColor = "pink";
blackBorder.style.borderStyle = "solid";
blackBorder.style.borderWidth = "3px"
container.appendChild(blackBorder);

const divH1 = document.createElement("h1");
divH1.textContent = "I'm in a div";
blackBorder.appendChild(divH1);

const divP = document.createElement("p");
divP.textContent = "ME TOO!";
blackBorder.appendChild(divP);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("hello World");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (e) => {
    console.log(e);
});

