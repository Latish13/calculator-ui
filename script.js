// Creat a constant variable for input tag to get value
const userInput = document.querySelector(".userinput");

// Add an event listener for buttons for input values
document.querySelector(".btn1").addEventListener("click", () => {
    userInput.value += "7";
});

document.querySelector(".btn2").addEventListener("click", () => {
    userInput.value += "8";
});

document.querySelector(".btn3").addEventListener("click", () => {
    userInput.value += "9";
});

document.querySelector(".btn4").addEventListener("click", () => {
    userInput.value += "/";
});

document.querySelector(".btn5").addEventListener("click", () => {
    userInput.value += "4";
});

document.querySelector(".btn6").addEventListener("click", () => {
    userInput.value += "5";
});

document.querySelector(".btn7").addEventListener("click", () => {
    userInput.value += "6";
});

document.querySelector(".btn8").addEventListener("click", () => {
    userInput.value += "*";
});

document.querySelector(".btn9").addEventListener("click", () => {
    userInput.value += "1";
});

document.querySelector(".btn10").addEventListener("click", () => {
    userInput.value += "2";
});

document.querySelector(".btn11").addEventListener("click", () => {
    userInput.value += "3";
});

document.querySelector(".btn12").addEventListener("click", () => {
    userInput.value += "-";
})

document.querySelector(".btn13").addEventListener("click", () => {
    userInput.value += "0";
})

document.querySelector(".btn14").addEventListener("click", () => {
    userInput.value += ".";
});

document.querySelector(".btn15").addEventListener("click", () => {
    userInput.value += "+";
});

// Add an event listener for output on last button
document.querySelector(".btn16").addEventListener("click", () => {
    try{
        userInput.value = eval(userInput.value);
    }

    catch(e){
        userInput.value = "Error occured!";
    }
});