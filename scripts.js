window.onload = function() {
    const buttons = document.querySelectorAll(".btn");
    const display = document.getElementById("display");

    buttons.forEach(button => button.addEventListener("click", () => getValue(button)));

    getValue = (button) => {
        const value = button.textContent;
        switch (value) {
            case "=":
                countResult();
            break;
            case "C":
                clearDisplay();
            break;
            case "←":
                deleteSign();
            break;
            case "%":
                countPercent();
            break;
            case "π":
                countPi();
            break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
            case "+":
            case "-":
            case "*":
            case "/":
            case ".":
            case "%":
            case "=":
            case "√":
            case "x²":
            case "(":
            case ")":
                addToDisplay(value);
            break;
        }
    }

    countResult = () => {
        const countResult = math.evaluate(display.value);
        setDisplay(countResult);
        
    }

    clearDisplay = () => {
        setDisplay("");
    }

    deleteSign = () => {
        const deletedSign = display.value.slice(0, -1);
        setDisplay(deletedSign);
    }

    countSqrt = (value) => {
        display.value += value;
        if (display.value.includes("√")) {
            const resultSqrt = value.replace("√", "");
            console.log(value);
            console.log(resultSqrt);
            setDisplay(math.sqrt(resultSqrt));
        }
        
    }

    countPercent = () => {
        
    }

    countPi = () => {
        const resultPi = math.pi;
        setDisplay(resultPi);
    }

    addToDisplay = (clickedSigns) => {
        if (clickedSigns == "x²") {
            display.value += "^";
            return;
        }
        if (clickedSigns == "." && display.value.slice(-1) == ".") {
            return;
        }
        if (clickedSigns == "." && display.value == "") {
            display.value += "0";
        }
        display.value += clickedSigns;
        if (display.value == "√") {
            display.value.slice(0, -1);
            console.log(display.value);
        }

    }

    setDisplay = (showResult) => {
        display.value = showResult;
    }
}
