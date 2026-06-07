/**
 * Generates a cryptographically secure random integer between 0 and max (exclusive).
 */
function getSecureRandomInt(max) {
  const randomBuffer = new Uint32Array(1);
  window.crypto.getRandomValues(randomBuffer);
  // Mitigate modulo bias
  let maxValid = 0xffffffff - (0xffffffff % max);
  while (randomBuffer[0] >= maxValid) {
    window.crypto.getRandomValues(randomBuffer);
  }
  return randomBuffer[0] % max;
}

/**
 * Fisher-Yates shuffle using crypto.getRandomValues
 */
function secureShuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = getSecureRandomInt(currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

/**
 * Calculates approximate entropy bits
 */
function calculateEntropy(passArray) {
  const totalLength = passArray.join('').length;
  // Approximation: 72 characters pool (A-Z, a-z, 0-9, symbols)
  const bitsPerChar = Math.log2(72);
  return Math.floor(totalLength * bitsPerChar);
}

function makePassword(letterCount = 12, noSymbol = false, noNumber = false) {
  if (isNaN(letterCount)) {
    throw "No number passed for letter count!"
  }

  letterCount = Math.max(12, Math.min(letterCount, 40));

  const passArray = [];

  // Mandatory components
  if (!noNumber) {
    passArray.push(getSecureRandomInt(10).toString());
  }
  if (!noSymbol) {
    passArray.push(symbols[getSecureRandomInt(symbols.length)]);
  }

  // Fill until we hit the floor length
  do {
    let currentLen = passArray.join('').length;
    let remaining = letterCount - currentLen;
    let passCount = Math.max(1, Math.min(remaining, 10));

    switch (passCount) {
      case 1:
        // Random character A-Z
        passArray.push(String.fromCodePoint(getSecureRandomInt(26) + 65));
        break;
      case 2:
        passArray.push(twoLetter[getSecureRandomInt(twoLetter.length)]);
        break;
      case 3:
        passArray.push(threeLetter[getSecureRandomInt(threeLetter.length)]);
        break;
      case 4:
        passArray.push(fourLetter[getSecureRandomInt(fourLetter.length)]);
        break;
      case 5:
        passArray.push(fiveLetter[getSecureRandomInt(fiveLetter.length)]);
        break;
      case 6:
        passArray.push(sixLetter[getSecureRandomInt(sixLetter.length)]);
        break;
      case 7:
        passArray.push(sevenLetter[getSecureRandomInt(sevenLetter.length)]);
        break;
      case 8:
        passArray.push(eightLetter[getSecureRandomInt(eightLetter.length)]);
        break;
      case 9:
        passArray.push(nineLetter[getSecureRandomInt(nineLetter.length)]);
        break;
      case 10:
        passArray.push(tenLetter[getSecureRandomInt(tenLetter.length)]);
        break;
      default:
        passArray.push(tenLetter[getSecureRandomInt(tenLetter.length)]);
        break;
    }
  } while (passArray.join('').length < letterCount);

  const entropy = calculateEntropy(passArray);
  return {
    password: secureShuffle(passArray).join(''),
    entropy: entropy
  };
}
