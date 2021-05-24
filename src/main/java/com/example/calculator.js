
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
            console.log("Error");
        }
    }

    console.log("length: " + gradeTotal.length);
    console.log("length2: " + count);

    for (var i = 0; i < length; i++) {
        if (gradeScore[i].value == 0 && gradeTotal[i].value > 0) {
            percent = gradeScore[i].value/gradeTotal[i].value;
            sum += percent;
        } else if (gradeScore[i].value != 0 && gradeTotal[i].value != 0) {
            percent = gradeScore[i].value/gradeTotal[i].value;
            sum += percent;
        } else if (gradeTotal[i].value == 0) {
            console.log("Error");
        }
    }

    result = sum/count;
    result *= 100;

    console.log("result: " + result);

    calcResult.innerHTML = "The Mean (average) is: " + result + "%";
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
            console.log("Error");
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
        } else if (gradeTotal[i].value == 0) {
            console.log("Error");
        }
    }

    result = sum/weightTotal;
    result *= 100;

    console.log("WT: " + weightTotal);
    console.log("sum: "+ sum);
    console.log("result: " + result);

    calcResult.innerHTML = "The Weighted Average is: " + result + "%";
}

function updatePercent() {
    var gradeScore = document.getElementsByClassName("score");
    var gradeTotal = document.getElementsByClassName("total");
    var percent = document.getElementsByClassName("percent");

    for (var i = 0; i < gradeScore.length; i++) {
        temp = gradeScore[i].value/gradeTotal[i].value;
        temp *= 100;
        percent[i].innerHTML = temp + "%";
    }
}

function isValid(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46);
}