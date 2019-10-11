function makeCombo() {

    var skills = [];
    var interests = [];
    var values = [];


    // Takes non-empty input fields and adds them to respective arrays
    for (var i = 1; i < 6; i++) {
        var skill = document.getElementById("skill" + i).value;
        var interest = document.getElementById("int" + i).value;
        var value = document.getElementById("value" + i).value;

        if (skill) {
            skills.push(skill);
        }

        if (interest) {
            interests.push(interest);
        }

        if (value) {
            values.push(value);
        }
    }

    var compound = [];

    // Takes random value from each array and pushes it to compound array
    var randSkill = skills[Math.floor(Math.random() * skills.length)];
    var randInterest = interests[Math.floor(Math.random() * interests.length)];
    var randValue = values[Math.floor(Math.random() * values.length)];

    compound.push(randSkill, randInterest, randValue);


    // takes away empty values from array
    var filtered = compound.filter(function (el){
        return el != null;
    })

    // shuffles array (function copied from stackoverflow)
    shuffle(filtered);

    // uses first and second value from shuffled filtered array
    let html1 = filtered[0];
    let html2 = filtered[1];
    
    // there needs to be values in at least 2 categories
    if (filtered.length < 2) {
        document.getElementById('result').innerHTML = "Please write values for at least 2 categories.";
    } else {
        // add the 2 values to html file at 'result'
        document.getElementById('result').innerHTML = html1 + " + " + html2;
    }

}

// found at stackoverflow (but understood it)
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// fires function when button is clicked
document.getElementById("go").addEventListener("click", makeCombo); 