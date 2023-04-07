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
            case "π":
                countPi();
            break;
            case "√":
                countSqrt(value);
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
            case "^":
            case "√":
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

    countSqrt = (valueToSqrt) => {
        const resultToSqrt = display.value += valueToSqrt.replace("√", "");
        const resultSqrt = math.sqrt(resultToSqrt);
        setDisplay(resultSqrt);
    }

    countPi = () => {
        const resultPi = math.pi;
        setDisplay(resultPi);
    }

    addToDisplay = (clickedSigns) => {
        if (clickedSigns == "^" && display.value.slice(-1) == "^") {
            return;
        }
        if (clickedSigns == "." && display.value.slice(-1) == ".") {
            return;
        }
        if (clickedSigns == "%" && display.value.slice(-1) == "%") {
            return;
        }
        if (clickedSigns == "*" && display.value.slice(-1) == "*") {
            return;
        }
        if (clickedSigns == "/" && display.value.slice(-1) == "/") {
            return;
        }
        if (clickedSigns == "+" && display.value.slice(-1) == "+") {
            return;
        }
        if (clickedSigns == "-" && display.value.slice(-1) == "-") {
            return;
        }
        if (clickedSigns == "." && display.value == "") {
            return;
        }
        if (clickedSigns == "+" && display.value == "") {
            return;
        }
        if (clickedSigns == "-" && display.value == "") {
            return;
        }
        if (clickedSigns == "*" && display.value == "") {
            return;
        }
        if (clickedSigns == "/" && display.value == "") {
            return;
        }
        if (clickedSigns == "^" && display.value == "") {
            return;
        }
        if (clickedSigns == "%" && display.value == "") {
            return;
        }
        if (clickedSigns == ")" && display.value == "") {
            return;
        }
        if (clickedSigns == "√" && display.value == "") {
            return;
        }
        display.value += clickedSigns;
    }

    setDisplay = (showResult) => {
        display.value = showResult;
    }
}