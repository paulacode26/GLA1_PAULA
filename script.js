//references:
const newHeadingE1 = document.createElement("h1");
const inputNumberE1 = document.createElement("input");
const inputNumberE2 = document.createElement("input");
const buttonCalculateE1 = document.createElement("button");
const displaySumE1 = document.createElement("p");
const displayAlertE1 = document.createElement("p");
const bodyparentE1 = document.querySelector("body");

//Style DOM:
bodyparentE1.style.display = "flex"; 
bodyparentE1.style.flexDirection = "column";
bodyparentE1.style.justifyContent = "center";
bodyparentE1.style.alignItems = "center";
bodyparentE1.style.background = "rgb(193, 229, 229)";

inputNumberE1.style.height= "30px";
inputNumberE1.style.width= "200px";
inputNumberE1.style.margin="10px";

inputNumberE2.style.height= "30px";
inputNumberE2.style.width= "200px";
inputNumberE2.style.margin="10px";

buttonCalculateE1.style.height= "30px";
buttonCalculateE1.style.width= "200px";
buttonCalculateE1.style.margin="10px";

displaySumE1.style.fontStyle = "italic";
displayAlertE1.style.fontStyle = "italic";
displaySumE1.style.fontSize = "25px";
displayAlertE1.style.fontSize = "25px";

buttonCalculateE1.style.color = "blue"
buttonCalculateE1.style.fontStyle = "italic";
buttonCalculateE1.style.background = "#F8EDFF";

inputNumberE1.style.color = "blue"
inputNumberE1.style.fontStyle = "italic";

inputNumberE2.style.color = "blue"
inputNumberE2.style.fontStyle = "italic";

// Point 2: Display and style full name:
newHeadingE1.innerHTML = "Paula Gomez Perez";
document.body.appendChild(newHeadingE1);
newHeadingE1.style.textAlign = "center";
newHeadingE1.style.color = "#A9A9A9";

// Point 3: Append two input elements and one button:
document.body.appendChild(inputNumberE1);
document.body.appendChild(inputNumberE2);
buttonCalculateE1.innerHTML = "Add numbers";
document.body.appendChild(buttonCalculateE1);

//Point 4: Arrow function(using try catch)
const validNumbersE1 = () => {
    let valueInputE1 = parseInt(inputNumberE1.value); // I used parseInt to convert the input string to number.
    let valueInputE2 = parseInt(inputNumberE2.value); // I used parseInt to convert the input string to number.
    
    try {
        displayAlertE1.innerHTML = ""; //Reset the  error
        inputNumberE2.style.removeProperty("border");//Reset the border
        inputNumberE1.style.removeProperty("border");//Reset the border

        if (!( /[0-9]/.test(valueInputE1) || /[0-9]/.test(valueInputE2))) {   // Both inputs should only receive numbers
            document.body.appendChild(displayAlertE1);
            inputNumberE1.style.border = "3px solid red";
            inputNumberE2.style.border = "3px solid red";
            throw Error("Invalid input. Please, type only numbers");

        } else if (!(/[0-9]/.test(valueInputE1))) { // Control that the input1 only receives numbers
            document.body.appendChild(displayAlertE1);
            inputNumberE1.style.border = "3px solid red";
            throw Error("Invalid input. Please, type only numbers");

        } else if (!(/[0-9]/.test(valueInputE2))) {// Control that the input2 only receives numbers
            document.body.appendChild(displayAlertE1);
            inputNumberE2.style.border = "3px solid red";
            throw Error("Invalid input. Please, type only numbers");
        }

    } catch (err) {
        displayAlertE1.innerHTML = err.message;
    } 
}

// 3 point: sum calculation:
buttonCalculateE1.addEventListener('click', () => {
let valueInputE1 = parseInt(inputNumberE1.value); // I used parseInt to convert the input string to number.
let valueInputE2 = parseInt(inputNumberE2.value); // I used parseInt to convert the input string to number.
validNumbersE1() //function is execute when the user click the boton. callback function.

let sumNumbersE1
if (valueInputE1 >= 0 && valueInputE2 >= 0) { //I set this condition to avoid seeing 'NaN' on the screen. Instead, if the inputs have invalid characters, the value of the sum is empty.
    sumNumbersE1 = valueInputE1 + valueInputE2;
    inputNumberE1.style.removeProperty("border");
    inputNumberE2.style.removeProperty("border");
} else {
    sumNumbersE1 = " ";
}
displaySumE1.innerHTML = `The sum of the number is: ${sumNumbersE1}`;
document.body.appendChild(displaySumE1);

});



