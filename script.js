let display = document.getElementById("result");
// for clear input
const clearValue = () => {
    display.value = "";
}

// for append value
function appendValue(value) {
    display.value = display.value + value;
}

// for calculate
const calculate = () => {
    try {
        const sum = eval(display.value);
        display.value = sum;
    }
    catch (error) {
        display.value = "Error";
    }

}
const clearOne = () => {
    display.value = display.value.slice(0, -1);
}