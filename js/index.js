// Get generate password Btn
let generatePasswordBtn = document.getElementById("generatePasswordBtn");
// When generate password Btn is fire click event
generatePasswordBtn.addEventListener("click", () => {
  console.log("generatePasswordBtnClicked");

  let passwordOne = [];
  let passwordTwo = [];
  for (let i = 0; i < 8; i++) {
    // generate a random number up to the length of characters array 8 times
    let randomNumber = Math.floor(Math.random() * characters.length);
    let randomNumberTwo = Math.floor(Math.random() * characters.length);

    // use the random number as an index to get a random character from the characters array and push to newArray to store value
    passwordOne.push(characters[randomNumber]);
    passwordTwo.push(characters[randomNumberTwo]);
  }
  console.log(passwordOne);
  console.log(passwordTwo);
  // get the html element and put in the return value of the function call using password as expression
  let displayP1 = (document.getElementById("passwordOne").textContent =
    removeCommas(passwordOne));
  let displayP2 = (document.getElementById("passwordTwo").textContent =
    removeCommas(passwordTwo));
});

// turn array into a string and remove the commas
function removeCommas(passw) {
  return passw.toString().replace(/,/g, "");
}

// array of all available characters to use in random password
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/"
];
