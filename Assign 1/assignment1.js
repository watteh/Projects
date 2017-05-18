function imp() {
    document.getElementById("imperial").style.display = 'block';
    document.getElementById("imperialButton").style.display = 'block';
    document.getElementById("metric").style.display = 'none';
    document.getElementById("metricButton").style.display = 'none';
}

function met() {
    document.getElementById("imperial").style.display = 'none';
    document.getElementById("imperialButton").style.display = 'none';
    document.getElementById("metric").style.display = 'block';
    document.getElementById("metricButton").style.display = 'block';
}

function activityLevel() {

    var activityLevel = document.getElementsByName('activityLevel');
    var activityMod = [1.2, 1.375, 1.55, 1.725, 1.9];
    var activityAmount;
    for (var i = 0; i < activityLevel.length; i++) {
        if (activityLevel[i].checked) {
            activityAmount = activityMod[i];
            return activityAmount;
        }
    }
}

function calcBMRImp() {
    var ageFactor = document.getElementById("age").value;
    var lbFactor = document.getElementById("pounds").value;
    var stoneFactor = document.getElementById("stone").value;
    var feetFactor = document.getElementById("feet").value;
    var inchesFactor = document.getElementById("inches").value;
    var sexFactor = document.getElementById("sex").value;
    var bmr;
    var height = (((feetFactor * 12) * 2.54) + (inchesFactor * 2.54)) * 6.25;
    var weight = ((stoneFactor * 6.35029) + (lbFactor * 0.453592)) * 10;
    sexFactor == "XY" ? bmr = ((weight) + (height) - (ageFactor * 5) + 5) * activityLevel() : bmr = ((weight) + (height) - (ageFactor * 5) - 161) * activityLevel();
    document.getElementById("resultBox").value = bmr.toFixed(0) + " KCals";
}

function calcBMRMetric() {
    var kgFactor = document.getElementById("kg").value;
    var cmFactor = document.getElementById("cm").value;
    var ageFactor = document.getElementById("age").value;
    var sexFactor = document.getElementById("sex").value;
    var bmr;

    sexFactor == "XY" ? bmr = ((kgFactor * 10) + (cmFactor * 6.25) - (ageFactor * 5) + 5) * activityLevel() : bmr = ((kgFactor * 10) + (cmFactor * 6.25) - (ageFactor * 5) - 161) * activityLevel();
    document.getElementById("resultBox").value = bmr.toFixed(0) + " KCals";
}