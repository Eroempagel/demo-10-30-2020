//let customerData = [
//  ["Narayan Bhattarai", "narayan@something.com", "8885554433"],
//  ["Evil Mario", "evil.mario@something.com", "8885554444"],
//  ["Michael Barrett", "michael@something.com","8886649900"],
//  ["Keyser Soze", "unusual@something.com", "9998885544"]
//];

// just the email addresses
//for(let i = 0; i < customerData.length; i++) {
//    console.log(customerData[i][1]);
//}

//let customerData = [
//  [
//    "Narayan Bhattarai",
//    ["narayan@something.com", "333 home st", "444 work dr"],
//    "8885554433",
//  ],
//  [
//    "Evil Mario",
//    ["evil.mario@something.com", "333 home st", "444 work dr"],
//    "8885554444",
//  ],
//  [
//    "Michael Barrett",
//    ["michael@something.com", "333 home st", "444 work dr"],
//    "8886649900",
//  ],
//  [
//    "Keyser Soze",
//   ["unusual@something.com", "333 home st", "444 work dr"],
//    "9998885544",
//  ],
//];

// just the email addresses
//for (let i = 0; i < customerData.length; i++) {

//  console.log(customerData[i][1][0]);
//}

// Eric portion

let currentPlayer = "X"; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
const cellElementArray = document.querySelectorAll(".grid-cell");

console.log(cellElementArray);

// Loop over each element in our cellElementArray:
for (
  let elementIndex = 0;
  elementIndex < cellElementArray.length;
  elementIndex += 1
) {
  // Set the cell element at cellElementArray[cellIndex] to the currentCell variable:
  const currentCellElement = cellElementArray[elementIndex];

  console.log(currentCellElement, "loop iteration: " + elementIndex);

  // Add an event listener to the currentCellElement:
  currentCellElement.addEventListener("click", function (event) {
    // event.target tells us which element the user clicked (see Resources links below):
    const clickedCellElement = event.target;

    if (currentPlayer === "X") {
      clickedCellElement.innerHTML = "X";
      currentPlayer = "O";
      playerXSelections.push(Number(clickedCellElement.id));
      checkForWin(winningCombinations, playerXSelections);
    } else {
      clickedCellElement.innerHTML = "O";
      currentPlayer = "X";
      playerOSelections.push(Number(clickedCellElement.id));
      checkForWin(winningCombinations, playerOSelections);
    }

    console.log(playerXSelections, "this is player x's selections: ");
    console.log(playerOSelections, "this is player o's selections: ");

    // Log the ID of the cell which was just clicked:
    console.log("You clicked on cell number: " + clickedCellElement.id);
  });
}

// define a function named checkForWin which accepts two arrays as arguments: winningCombination and playerSelections
//     for every winning combination array in winningCombination
//         create a matches variable to keep track of the number of matches we find in playerSelections
//         for every number in the current combination array
//             if the playerSelections array contains the current number, increment matches by 1
//             if matches is **equal** to 3, we found a win, so return true (which will stop the loop and exit the function)
//     if we got through all combinations without returning true, then return false because no win was found

function checkForWin(winningCombinations, playerSelections) {
  //console.log(winningCombinations, "winning combos");
  //console.log(playerSelections, "what the player has picked so far");

  for (let i = 0; i < winningCombinations.length; i++) {
    console.log(winningCombinations[i]);
    let currentCombo = winningCombinations[i];
    let matches = 0;
    for (let j = 0; j < currentCombo.length; j++) {
      let currentComboNumber = currentCombo[j];
      if (playerSelections.includes(currentComboNumber)) {
        matches++;
      }
      console.log(matches);
      if (matches === 3) {
        console.log("You Win!");
        return true;
      }
    }
  }
  return false;
}
