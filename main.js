window.onload = () => {

    // start of main task script
    let mainTask = mainTaskInput;

        btn1.addEventListener('click', () => {
            inputOutput.innerText = `Your input is ${mainTask.value}`;
            do {
                loopResult.innerHTML += `${mainTask.value}<br/>`;
                mainTask.value -= 200;
            } while (mainTask.value >= 3000);
            mainTask.value = '';
        });
    // end of main task script


    // start script for switching task
    const showHideBtn = document.querySelector(".show-hide-btn");
    const mainTaskContainer = document.querySelector(".main-task");
    const customTaskContainer = document.querySelector(".custom-task");
    showHideBtn.addEventListener("click", () => {
        if (mainTaskContainer.style.display === "block" && showHideBtn.innerText === "Try The Customized Task") {
            mainTaskContainer.style.display = "none";
            customTaskContainer.style.display = "block";
            showHideBtn.innerText = "Back To Main Task";
        } else {
            customTaskContainer.style.display = "none";
            mainTaskContainer.style.display = "block";
            showHideBtn.innerHTML = "Try the customized task";
            showHideBtn.innerText = "Try The Customized Task";
        }

        if (inputOutput.innerText && loopOutput.innerText && endOfLoop.innerText) {
            inputOutput.innerText = "";
            loopOutput.innerText = "";
            endOfLoop.innerText = "";
            clear.style.display = "none";
        } 
        inputOutput.innerText = "";
        loopResult.innerHTML = "";
        
    });

    // end of script for switching task

    
    // start of custom task 

    let fNumber = firstNumber;
    let sNumber = secondNumber;
    let dcNumber = thirdNumber;
    const error = document.querySelector(".error-container");
    const errorMsg = document.querySelector(".error-message");
    const errorTitle = document.querySelector(".error-title");

    const loop = {
        myLoop(){
            inputOutput.innerHTML = `Start Number Value: <b>${parseInt(fNumber.value)}</b><br/>End Number Value: <b>${parseInt(sNumber.value)}</b><br/>Decrement Number Value: <b>${parseInt(dcNumber.value)}</b>`;
                    
                    do {
                        loopOutput.innerHTML += `This is a loop of your input: <b>${fNumber.value} - ${dcNumber.value} = ${fNumber.value - dcNumber.value}</b><br/>`;
                        endOfLoop.innerHTML = `End of loop: <b>${fNumber.value}</b>`
                        fNumber.value -= dcNumber.value;
                    } while (parseInt(fNumber.value) >= parseInt(sNumber.value));
                    fNumber.value = '';
                    sNumber.value = '';
                    dcNumber.value = '';
                    clear.style.display = "block";
        }
    }

    fNumber.addEventListener("keyup", () => {
        if (parseInt(fNumber.value) >= parseInt(dcNumber.value)){
            dcNumber.style.color = "#083c2f";
            if (parseInt(sNumber.value) <= parseInt(fNumber.value)) {
                sNumber.style.color = "#083c2f";
            }
        } else {
            sNumber.style.color = "#eb1818";
            dcNumber.style.color = "#eb1818";
        }
    });
    
    sNumber.addEventListener("keyup", () => {
        if (parseInt(sNumber.value) > parseInt(fNumber.value)) {
            sNumber.style.color = "#eb1818";
        } else {
            sNumber.style.color = "#083c2f";
        }
    });
    
    dcNumber.addEventListener('keyup', () => {
        if (parseInt(fNumber.value) < parseInt(dcNumber.value)) {
            dcNumber.style.color = "#eb1818";
        } else {
            dcNumber.style.color = "#083c2f";
        }
    });
    

    btn2.addEventListener('click', () => {
        if (parseInt(fNumber.value) && parseInt(sNumber.value) && parseInt(dcNumber.value)) {
            if (parseInt(fNumber.value) >= parseInt(dcNumber.value)) {
                if (parseInt(fNumber.value) >= parseInt(sNumber.value)) {
                    if (inputOutput.innerText && loopOutput.innerText &&endOfLoop.innerText) {
                        inputOutput.innerText = "";
                        loopOutput.innerText = "";
                        endOfLoop.innerHTML = "";

                        loop.myLoop();
                    }else {
                        loop.myLoop();
                    }
                } else {
                    error.classList.remove("hide");
                    error.classList.add("show");
                    errorMsg.innerText = "Please enter only the start value greater than the end value";    
                }
                
            } else {
                error.classList.remove("hide");
                error.classList.add("show");
                errorMsg.innerText = "Avoid entering a decrement value that\nis greater than the start value";
            }
            
        } else if(fNumber.value == '' && sNumber.value && dcNumber.value) {
            error.classList.remove("hide");
            error.classList.add("show");
            errorTitle.innerText = "No Input!";
            errorMsg.innerText = "Please fill up the start value";
        } else if(fNumber.value && sNumber.value  == '' && dcNumber.value) {
            error.classList.remove("hide");
            error.classList.add("show");
            errorTitle.innerText = "No Input!";
            errorMsg.innerText = "Please fill up the end value";
        } else if(fNumber.value && sNumber.value && dcNumber.value == '' ) {
            error.classList.remove("hide");
            error.classList.add("show");
            errorTitle.innerText = "No Input!";
            errorMsg.innerText = "Please fill up the decrement value";
        } else {
            error.classList.remove("hide");
            error.classList.add("show");
            errorTitle.innerText = "No Input!";
            errorMsg.innerText = "Please fill up the all empty field";
            
        }
    });

    // toggle clear output
    clear.addEventListener("click", () => {
        inputOutput.innerText = "";
        loopOutput.innerText = "";
        endOfLoop.innerText = "";
        clear.style.display = "none";
    });

    // toggle error button
    errorBtn.addEventListener("click", () => {
            error.classList.remove("show");
            error.classList.add("hide");
            errorTitle.innerText = "Invalid Input!";
    });

    error.addEventListener("click", () => {
        error.classList.remove("show");
        error.classList.add("hide");
        errorTitle.innerText = "Invalid Input!";
    });
    // end of custom task script
}

