const form = document.getElementById('loginForm');
const username = document.getElementById('username');
const password = document.getElementById('password');
const mainContent = document.getElementById('main-content');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');

// Mock valid credentials for demonstration
const validUser = 'admin';
const validPass = '123456';

form.addEventListener('submit', function (e) {
    /**
     * "function(e) is just the set of instructions that runs when you 
     * click submit, and e is the browser's report about that click—which lets us tell the browser, 
     * 'Don't refresh the page yet, let me check the password first.'"
     * 
     */
  e.preventDefault();
  let isValid = true;

  const enteredUser = username.value.trim();//trim remove blank space
  const enteredPass = password.value;

  // 1. Check Username
  if (enteredUser === '') {
    usernameError.textContent = 'Username is required';
    isValid = false;
  } else {
    usernameError.textContent = '';
  }

  // 2. Check Password
  if (enteredPass === '') {
    passwordError.textContent = 'Password is required';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  // 3. Verify credentials and replace #main-content only on success
  if (isValid) { //if true
    if (enteredUser === validUser && enteredPass === validPass) {
      mainContent.replaceChildren();
      /**
       *mainContent.replaceChildren(); 
       empties everything inside the <main id="main-content"> element. 
       */

      const heading = document.createElement('h1');
      console.log(heading);
      //Creates a new <h1> element in memory so you can customize it before placing it on the page.
      heading.textContent = `Welcome back, ${enteredUser}!`;
      console.log(heading);
      //${enteredUser} is a template literal placeholder that inserts the value stored in the enteredUser variable right into the string.   
            mainContent.appendChild(heading);
      //Inserts the finished <h1> into #main-content so it appears on the screen.
    } else {
      passwordError.textContent = 'Invalid username or password';
    }
  }
});
