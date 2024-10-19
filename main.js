// --FUNCTIONS

// Clears the screen
function clearAll() { 
  const screen = document.querySelector('#screen')
  screen.value = ""
}
// Deletes previous input
function removeNumber() {
  const screen = document.querySelector('#screen');
  screen.value = screen.value.toString().slice(0, -1)
}


// --DOM MANIPULATION

document.addEventListener('DOMContentLoaded', () => {
    
  const input = document.querySelector('#input-section');// --Grabs the form soon as the page loads

  input.addEventListener('click', (e) => {

    const button = e.target.closest('.btn');// --Checks if a button is clicked

    if (!button) return;// --If not a button, do nothing

    const screen = document.querySelector('#screen');// --Grabs the display screen
    const solve = document.querySelector('#compute');// --Grabs the equals button

    try {
      if (button.value === 'AC') {// --Checks if AC button is clicked
        clearAll();
        }  else if (button.value === 'DEL') {// --Checks if DEL button is clicked
          removeNumber();
        } else if (button == solve) {// --Checks if equals button is clicked
            if (screen.value === "") {
              window.alert('Syntax Error: Invalid expression');
              screen.clearAll();
            }        
            let result = eval(screen.value);
            screen.value = parseFloat(result.toFixed(3));        
        } else {
            screen.value += button.value;

            if (screen.value.length > 16) {// --Controls the number of digits on the display
              window.alert('Max number of inputs reached. Restart operation');
              clearAll();
            } 
          };
    } catch(error) {// --Handles errors only appearing in the console
      window.alert('Error. Check display');
    }
  });
});

        // else if (button.value === '.' && screen.value.includes('.')) {
        //   window.alert('Syntax Error: Invalid expression');
        //   // return;
        // } 

        // console.log(screen.innerText.length);