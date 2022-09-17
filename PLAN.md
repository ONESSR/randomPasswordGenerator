## PLAN

Create a random password generator using html, css & javascript

### MVP

- When a button is clicked two random passwords will be generated
- responsive layout
- styled with css

### TIMEFRAME

- A few hours

### STEPS

- basic file/folder setup ✅
  - index.html, css: style.css + mediaqueries.css, js: index.js, \_assets folder ✅
- sketch layout ✅
- ![Sketch & Wireframes of random password generator layout & components](./_assets/sketchAndWireframesOfLayoutAndComponents.png)
  - think about component tree and identify components required ✅
- code component structure ✅
- look for patterns ✅
- psuedo code the algo ✅
- code the functionality ✅
  - Generate password btn: onclick/addEventListener"click", function ()=>{} ✅
  - create array of potential characters ✅
  - generate random character ✅
    - Math.floor(Math.random()\*character.length) ✅
    - Loop over characters array and generate a random set of characters of average length(8/9 characters) v
      - for loop for 8 loops ✅
      - Math for random number 8 times ✅
      - use random number as index of character for random character ✅
      - push to new array to store as password 1 (do same for password 2) ✅
      - turn array toString() for string password ✅
      - get password elements by id from html ✅
      - set textContent to value of strings respectively ✅
      - remove commas from string with .replace(/,/g, "") ✅
      - repeat for second password ✅

### STRETCH GOALS

- Click to copy password feature ❌
  - add icon to each password area (try materialicons and lower opacity)
    - on click get the value of the div
    - on click have a prompt below password area to say copy was successful
    - use a set timeout on the visibility?
- Choose password made of letters of symbols
- Select length of random password

### INSIGHTS / LEARNINGS

- Stretch goals will require planning.
- If I had more time I would have liked to implement the click to copy password to clipboard feature as it gives the user peace of mind that they are using the correct password rather than trying to remember the characters manually to use elsewhere. I started it but as soon as the layout crumbled when I inserted the copy icon I realised I would need more time than I had to give to implement the feature successfully.
