let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let count = 0;
let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }
};

const showWinner = (pos1val) => {
    msg.innerText = ` Congratulations ${pos1val}, You Won!.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }

    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            // box.innerText.color = "red";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
        checkDrawGame();
    });
});

const checkDrawGame = () => {
    if(count == 9){
        msg.innerText = ` You Both Played Well! The Game is Draw.`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
}

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);