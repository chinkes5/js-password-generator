# js-password-generator
A javascript password generator

#TODO List
- Get words from [EFF (Electronic Frontier Foundation) Diceware Wordlists](https://www.eff.org/dice)
- Use crypto.getRandomValues() from browser, fail if missing
- Add a small UI element that calculates the bits of entropy based on the pool size and the number of elements chosen: $E = \log_2(R^L)$ where $R$ is the pool size and $L$ is the length/number of words. _> 60 is good_
- Use length slider as floor rather than ceiling to get more entropy
- Use a Fisher-Yates shuffle, like-

```
function secureShuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;
  const randomBuffer = new Uint32Array(1);

  while (currentIndex !== 0) {
    // Generate a random number
    window.crypto.getRandomValues(randomBuffer);

    // Mitigate modulo bias for cryptographic safety
    let maxValid = 0xffffffff - (0xffffffff % currentIndex);
    if (randomBuffer[0] >= maxValid) continue;

    randomIndex = randomBuffer[0] % currentIndex;
    currentIndex -= 1;

    // Swap elements
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
```