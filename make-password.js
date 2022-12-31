const symbols = ["!", "@", "#", "$", "%", "^", "&", "(", ")"];
let number = Math.floor(Math.random() * 99);

function makePassword(longer = false) {
    const passArray = [symbols[Math.floor(Math.random() * symbols.length)], number];
    if (longer == true) {
        passArray.push(sixLetter[Math.floor(Math.random() * sixLetter.length)].value);
        passArray.push(sixLetter[Math.floor(Math.random() * sixLetter.length)].value);
    }
    else {
        passArray.push(fiveLetter[Math.floor(Math.random() * fiveLetter.length)].value);
        passArray.push(fiveLetter[Math.floor(Math.random() * fiveLetter.length)].value);
    }
    
    return passArray.sort(function () { return 0.5 - Math.random() }).join('');
    // return password;
}

document.getElementById("password").innerHTML = makePassword()