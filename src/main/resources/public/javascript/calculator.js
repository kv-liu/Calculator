function calcMean() {
    var gradeScore = document.getElementsByClassName("score");
    var gradeTotal = document.getElementsByClassName("total");
    var percent = document.getElementsByClassName("percent");
    var calcResult = document.getElementById("calc-result");

    var sum = 0;
    var percent = 0;
    var result = 0;
    var count = 0;
    var length = gradeScore.length;
    
    for (var j = 0; j < length; j++) {
        if (gradeScore[j].value == 0 && gradeTotal[j].value > 0) {
            count += 1;
        } else if (gradeScore[j].value != 0 && gradeTotal[j].value != 0) {
            count += 1;
        } else if (gradeTotal[j].value == 0) {
            count += 0;
        }
    }

    for (var i = 0; i < length; i++) {
        if (gradeScore[i].value == 0 && gradeTotal[i].value > 0) {
            percent = gradeScore[i].value/gradeTotal[i].value;
            sum += percent;
        } else if (gradeScore[i].value != 0 && gradeTotal[i].value != 0) {
            percent = gradeScore[i].value/gradeTotal[i].value;
            sum += percent;
        }
        
        if (gradeScore[i].value != null && gradeTotal[i].value == null) {
            break;
        } else if (gradeScore[i].value != null && gradeTotal[i].value == "0") {
            alert("Grades cannot be out of zero!");
        } else if (gradeScore[i].value.length == 0 && gradeTotal[i].value.length != 0) {
            alert("Enter a valid grade at row: " + (i+1));
        } else if (gradeScore[i].value.length != 0 && gradeTotal[i].value.length == 0) {
            alert("Enter a valid grade at row: " + (i+1));
        }
    }

    result = sum/count;
    result *= 100;

    if (!isNaN(result) && sum != 0) {
        calcResult.innerHTML = "The Mean (average) is: " + result.toFixed(2) + "%";
    } else {
        calcResult.innerHTML = "Invalid Input(s): Please enter some grades";
    }
}

function calcWeighted() {
    var gradeScore = document.getElementsByClassName("score");
    var gradeTotal = document.getElementsByClassName("total");
    var percent = document.getElementsByClassName("percent");
    var weightScore = document.getElementsByClassName("weight");
    var calcResult = document.getElementById("calc-result");

    var sum = 0;
    var percent = 0;
    var weightTotal = 0;
    var result = 0;
    var count = 0;
    var length = gradeScore.length;
    
    for (var j = 0; j < length; j++) {
        if (gradeScore[j].value == 0 && gradeTotal[j].value > 0) {
            count += 1;
        } else if (gradeScore[j].value != 0 && gradeTotal[j].value != 0) {
            count += 1;
        } else if (gradeTotal[j].value == 0) {
            count += 0;
        }
    }

    for (var i = 0; i < length; i++) {
        if (gradeScore[i].value == 0 && gradeTotal[i].value > 0) {
            percent = gradeScore[i].value/gradeTotal[i].value;
            weightTotal += parseFloat(weightScore[i].value);
            sum += percent*weightScore[i].value;
        } else if (gradeScore[i].value != 0 && gradeTotal[i].value != 0) {
            percent = gradeScore[i].value/gradeTotal[i].value;
            weightTotal += parseFloat(weightScore[i].value);
            sum += percent*weightScore[i].value;
        }

        if (gradeScore[i].value != null && gradeTotal[i].value == null) {
            break;
        } else if (gradeScore[i].value != null && gradeTotal[i].value == "0") {
            alert("Grades cannot be out of zero!");
        }  else if (gradeScore[i].value.length == 0 && gradeTotal[i].value.length != 0) {
            alert("Enter a valid grade at row: " + (i+1));
        } else if (gradeScore[i].value.length != 0 && gradeTotal[i].value.length == 0) {
            alert("Enter a valid grade at row: " + (i+1));
        }

        if (weightScore[i].value.length != 0 && gradeScore[i].value.length == 0 && gradeTotal[i].value.length == 0) {
            alert("Please enter a grade for row: " + (i+1));
        } else if (weightScore[i].value.length == 0 && gradeScore[i].value.length != 0 && gradeTotal[i].value.length != 0) {
            alert("Please enter a weight for row: " + (i+1));
        } 
    }

    result = sum/weightTotal;
    result *= 100;

    if (!isNaN(result)) {
        calcResult.innerHTML = "The Weighted Average is: " + result.toFixed(2) + "%";
    } else {
        calcResult.innerHTML = "Invalid Input(s): Please enter some grades & their weights";
    }

}

function updatePercent() {
    var gradeScore = document.getElementsByClassName("score");
    var gradeTotal = document.getElementsByClassName("total");
    var percent = document.getElementsByClassName("percent");

    for (var i = 0; i < gradeScore.length; i++) {
        temp = gradeScore[i].value/gradeTotal[i].value;
        temp *= 100;

        if (isNaN(temp)) {
            percent[i].innerHTML = "Invalid Input";
        } else {
            percent[i].innerHTML = temp.toFixed(2) + "%";
        }
        
    }
}

function isValid(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46);
}

function addRow() {
    var table = document.getElementById("table");
    var lastRow = document.getElementById("table").rows.length;
    var row = table.insertRow(lastRow);

    var newName = row.insertCell(0);
    var newShortName = row.insertCell(1);
    var newWeight = row.insertCell(2);
    var newGrade = row.insertCell(3);
    var newPercent = row.insertCell(4);

    var nameInput = document.createElement("INPUT");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("class", "newName");
    nameInput.setAttribute("placeholder", "Enter Name");
    newName.appendChild(nameInput);

    var shortNameInput = document.createElement("INPUT");
    shortNameInput.setAttribute("type", "text");
    shortNameInput.setAttribute("class", "newShortName");
    shortNameInput.setAttribute("placeholder", "Enter Short Name");
    newShortName.appendChild(shortNameInput);

    var weightInput = document.createElement("INPUT");
    weightInput.setAttribute("type", "number");
    weightInput.setAttribute("class", "weight");
    weightInput.setAttribute("min", "0");
    weightInput.setAttribute("onkeypress", "return isValid(event)");
    newWeight.appendChild(weightInput);

    var gradeScoreInput = document.createElement("INPUT");
    var gradeTotalInput = document.createElement("INPUT");

    gradeScoreInput.setAttribute("type", "number");
    gradeScoreInput.setAttribute("class", "score");
    gradeScoreInput.setAttribute("oninput", "updatePercent()");
    gradeScoreInput.setAttribute("min", "0");
    gradeScoreInput.setAttribute("onkeypress", "return isValid(event)");

    var slashImg = document.createElement("IMG");

    slashImg.setAttribute("src", "https://static.thenounproject.com/png/2342342-200.png")
    slashImg.setAttribute("width", "25");
    slashImg.setAttribute("height", "25");
    slashImg.setAttribute("class", "slash");
    slashImg.setAttribute("alt", "forward slash");

    gradeTotalInput.setAttribute("type", "number");
    gradeTotalInput.setAttribute("class", "total");
    gradeTotalInput.setAttribute("oninput", "updatePercent()");
    gradeTotalInput.setAttribute("min", "0");
    gradeTotalInput.setAttribute("onkeypress", "return isValid(event)");

    newGrade.appendChild(gradeScoreInput);
    newGrade.appendChild(slashImg);
    newGrade.appendChild(gradeTotalInput);

    newPercent.setAttribute("class", "percent");
    newPercent.innerHTML = "";
}

function delRow() {
    var lastRow = document.getElementById("table").rows.length;
    
    if (lastRow != 1) {
        document.getElementById("table").deleteRow(lastRow-1);
    }
}