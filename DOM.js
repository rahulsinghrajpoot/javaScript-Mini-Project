// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Apna College Students.";
// console.log(h2.innerText);

let divs = document.querySelectorAll(".box");

let idx = 1;
for(di of divs){
    di.innerText = `new updated div ${idx}`;
    idx++;
}
// divs[0].innerText = "new updated div text 1.";
// divs[1].innerText = "new updated div text 2.";
// divs[2].innerText = "new updated div text 3.";

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

// document.body.prepend(newBtn);  --> we can also use this in case of body node.
document.querySelector("body").prepend(newBtn);


let parah = document.querySelector("p");
// console.log(parah.getAttribute("para"));
parah.classList.add("para", "newPara");
