const symbols = ["!", "@", "#", "$", "%", "^", "&", "(", ")"];

/*function makePassword(longerWords = false, wordCount = 2, noSymbol = false, noNumber = false) {
    //some checks on how many words requested
    if (isNaN(wordCount)) {
        throw "No number passed for word count!"
    }
    //keep the word count in this range
    if (wordCount < 2) {
        wordCount = 2
    }
    if (wordCount > 10) {
        wordCount = 10
    }

    //had to make the array outside of conditions for some reason
    const passArray = [Math.floor(Math.random() * 99)];
    if (noNumber == true) {
        //testing for true so I can remove the number
        passArray.pop();
    }
    
    if (noSymbol == false) {
        //testing for false so I can add to the array with a symbol
        passArray.push(symbols[Math.floor(Math.random() * symbols.length)]);
    }
    
    if (longerWords == true) {
        //testing for true to give the longer words
        for (let index = 0; index < wordCount; index++) {
            //loop thru the word count
            passArray.push(sixLetter[Math.floor(Math.random() * sixLetter.length)].value);
        }
    }
    else {
        //the default is the shorter words
        for (let index = 0; index < wordCount; index++) {
            //loop thru the word count
            passArray.push(fiveLetter[Math.floor(Math.random() * fiveLetter.length)].value);
        }
    }

    //mix up the array and return as one string
    return passArray.sort(function () { return 0.5 - Math.random() }).join('');
}*/

// document.getElementById("password").innerHTML = makePassword()
const password = async () => {
    let response = await fetch("https://passwords.chinkes.workers.dev/password", {
        headers: {
            'Content-Type': 'application/json',
            'Origin': window.location.origin+window.location.host
          }
    })
    .then(response => response.text())
    // let myJson = await response.json();
}
document.getElementById("password").innerHTML = password().then