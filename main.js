const container = document.createElement("div");
container.classList.add("container");

// image container
const imgContainer = document.createElement("div");
imgContainer.classList.add("img-container");

const image = document.createElement("img");
image.src = "img-1.jpg";

document.body.appendChild(container);
container.appendChild(imgContainer);
imgContainer.appendChild(image);

// main container
const main = document.createElement("div");
main.classList.add("main");

// main text
const mainText = document.createElement("div");
mainText.classList.add("main-text");
const header1 = document.createElement("h1");
header1.innerText = "EMBRACE THE SCENERY";
mainText.appendChild(header1);
const header2 = document.createElement("h2");
header2.innerText = "BEAUTIFUL WORLD.";
mainText.appendChild(header2);
const paragraph = document.createElement("p");
paragraph.innerText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a interdum leo, eu blandit ex. Nam fringilla nec neque ac mattis. Ut sit amet lacus dolor. Phasellus vehicula a est a sagittis. Aenean sagittis nisi est, at volutpat dui imperdiet eu. Etiam finibus metus ac lectus vestibulum, ut hendrerit elit suscipit. Nulla sit amet risus tellus. Etiam consectetur, odio accumsan consequat fermentum, sapien diam pretium lectus, eget tristique enim est ut nunc. Etiam quis laoreet leo, ac convallis nulla. Mauris imperdiet, lorem sit amet mollis imperdiet, nisl dui ornare risus, ultrices accumsan libero lectus quis tellus. Morbi porttitor, ipsum eget dictum ornare, lacus neque hendrerit nisi, pharetra iaculis est dolor sit amet turpis. Donec ut tincidunt dolor.";
mainText.appendChild(paragraph);
main.appendChild(mainText);

// btn container
const Btn = document.createElement("div");
Btn.classList.add("btn");
const mainBtn = document.createElement("button");
mainBtn.innerText = "EXPLORE";
Btn.appendChild(mainBtn);
main.appendChild(Btn);

container.appendChild(main);
console.log(container)

// DOM Elements Manipulation
