const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";
container.appendChild(para);

const headL3 = document.createElement("h3");
headL3.textContent = "I'm a blue H3!";
headL3.style.color = "blue";
container.appendChild(headL3);

const blackDiv = document.createElement("div");
blackDiv.style["border-color"] = "black";
blackDiv.style["background-color"] = "pink";
blackDiv.style["border-width"] = "medium";
blackDiv.style["border-style"] = "solid";
container.appendChild(blackDiv);

const headL1 = document.createElement("h1");
headL1.textContent = "I'm in a div";
blackDiv.appendChild(headL1);

const blackDivPara = document.createElement("p");
blackDivPara.textContent = "Me too!";
blackDiv.appendChild(blackDivPara);
