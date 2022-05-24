// alert("This works");

const btnDisplay = document.getElementById("btnDisplay");
const txtUserInput = document.getElementById("txtUserInput");
const dtpBday = document.getElementById("birthday");
const cpColor = document.getElementById("cpColor");
const btnColorPicker = document.getElementById("btnDisplayColor");
const bodyColor = document.getElementById("body");

btnColorPicker.addEventListener('click', function() {
    bodyColor.style.backgroundColor = cpColor.value;
    // alert(cpColor.value);
})

btnDisplay.addEventListener('click', function() {

    if(dtpBday.value !== "") {
        alert(dtpBday.value);

    }
    else {
        alert("Enter a valid bday");
    }

});