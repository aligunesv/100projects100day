function generatePassword() { //Function name
    var length = document.getElementById('length').value;  //A variable named 'length' is created and the getElementById function is used to retrieve the value of an element with a specific id in HTML.
    var password = ''; //An empty string named password is created. This variable is used to hold the random password generated.
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-='; //A string named characters is created. This string contains the characters of the generated password.
    
    for (var i = 0; i < length; i++) { //The password is created using a for loop. A variable called i is created and starts at zero. The loop continues until the value of the variable length.
        var randomIndex = Math.floor(Math.random() * characters.length); //A variable called randomIndex is created and a random number between 0 and 1 is generated using the Math.random() function. This number is multiplied by the length of the characters array and the Math.floor() function is used to convert the result to an integer.
        password += characters.charAt(randomIndex); //A random character selected from the characters array is appended to the password string.
    }
    
    document.getElementById('password').value = password; //Assigns the value of an input element with password id to the password string using the getElementById function.
}
