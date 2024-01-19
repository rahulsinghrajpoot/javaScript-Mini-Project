let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let curmode = "light";

modebtn.addEventListener("click", () => {
    if(curmode === "light"){
        curmode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        console.log(curmode);
    }else{
        curmode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        console.log(curmode);
    }
})