window.onload = function(){
    //ARRAY FOR SAVE ERRORS
    var arrayErrors = [];

    //EMAIL VALIDATION
    var loginEmail = document.getElementById("login-email");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var loginEmailAlert = document.createElement('p');
    var loginEmailSuccess = false;
    loginEmailAlert.classList.add("red-font");
    loginEmail.onblur = validateEmail;
    loginEmail.onfocus = removeEmailAlerts;
    function validateEmail(){
        if(isEmpty(loginEmail)){
            loginEmail.classList.add("red-border");
            loginEmailAlert.textContent = "* Email field is required";
            loginEmail.insertAdjacentElement("afterend", loginEmailAlert);
            arrayErrors[0] = 'Error! ' + loginEmailAlert.textContent;
            loginEmailSuccess = false;
        }else if(!(emailExpression.test(loginEmail.value))){
            loginEmail.classList.add("red-border");
            loginEmailAlert.textContent = "* Insert a valid email";
            loginEmail.insertAdjacentElement("afterend", loginEmailAlert);
            arrayErrors[0] = 'Error! ' + loginEmailAlert.textContent;
            loginEmailSuccess = false;
        }else{
            loginEmail.classList.add("green-border");
            arrayErrors[0] = loginEmail.value.trim();
            loginEmailSuccess = true;
        }
    }
    function removeEmailAlerts(){
        loginEmail.classList.remove("green-border", "red-border");
        loginEmailAlert.remove();
    }

    //PASSWORD VALIDATION
    var loginPassword = document.getElementById("login-password");
    var loginPasswordAlert = document.createElement('p');
    var loginPasswordSuccess = false;
    loginPasswordAlert.classList.add("red-font");
    loginPassword.onblur = validatePassword;
    loginPassword.onfocus = removePasswordAlerts;
    function validatePassword(){
        if(isEmpty(loginPassword)){
            loginPassword.classList.add("red-border");
            loginPasswordAlert.textContent = "* Password field is required";
            loginPassword.insertAdjacentElement("afterend", loginPasswordAlert);
            arrayErrors[1] = 'Error! ' + loginPasswordAlert.textContent;
            loginPasswordSuccess = false;
        }else if(loginPassword.value.length < 8 && !hasNumbersAndLetters(loginPassword.value)){
            loginPassword.classList.add("red-border");
            loginPasswordAlert.textContent = "* Password must have minimun 8 characters includes numbers and letters";
            loginPassword.insertAdjacentElement("afterend", loginPasswordAlert);
            arrayErrors[1] = 'Error! ' + loginPasswordAlert.textContent;
            loginPasswordSuccess = false;
        }else if(loginPassword.value.length < 8){
            loginPassword.classList.add("red-border");
            loginPasswordAlert.textContent = "* Password must have minimun 8 characters";
            loginPassword.insertAdjacentElement("afterend", loginPasswordAlert);
            arrayErrors[1] = 'Error! ' + loginPasswordAlert.textContent;
            loginPasswordSuccess = false;
        }else if(!hasNumbersAndLetters(loginPassword.value)){
            loginPassword.classList.add("red-border");
            loginPasswordAlert.textContent = "* Password must have letters and numbers";
            loginPassword.insertAdjacentElement("afterend", loginPasswordAlert);
            arrayErrors[1] = 'Error! ' + loginPasswordAlert.textContent;
            loginPasswordSuccess = false;
        }else{
            loginPassword.classList.add('green-border');
            arrayErrors[1] = loginPassword.value;
            loginPasswordSuccess = true;
        }
    }
    function removePasswordAlerts(){
        loginPassword.classList.remove('red-border', 'green-border');
        loginPasswordAlert.remove();
    }

    //CLICK LOGIN BUTTON
    var loginButton = document.getElementById("btn-login");
    loginButton.onclick = function(e){
        e.preventDefault();
        validateEmail(loginEmail);
        validatePassword(loginPassword);
        if(loginPasswordSuccess && loginEmailSuccess){
            alert("Welcome!\nEmail: " + loginEmail.value + "\nPassword: " + loginPassword.value);
        }else{
            alert("Please check data!" + "\nEmail: " + arrayErrors[0] + "\nPassword: " + arrayErrors[1]);
        }
    }

    //CLICK BACK BUTTON
    var backLoginButton = document.getElementById("btn-back");
    backLoginButton.onclick = function(){
        window.location.href='./index.html';
    }

    //VALIDATOR FUNCTIONS
    function isEmpty(myString){
        if(myString.value == ''){
            return true;
        }else{
            return false;
        }
    }
    function hasLetters(myString){
        for(var i = 0 ; i < myString.length; i++){
            if(!((myString[i] >= 'a' && myString[i] <= 'z') || (myString[i] >= 'A' && myString[i] <= 'Z'))){
                return false;
            }
        }
        return true;
    }
    function hasNumbers(myString){
        var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            for(var i=0; i<myString.length; i++){
                if(numbers.includes(myString[i])){
                    return true;
                }
            }
            return false;
        }
    function hasNumbersAndLetters(myString){
        var num = false;
        var char = false;
        for(var i=0; i<myString.length; i++){
            if(hasNumbers(myString[i])){
                num = true;
            }else if(hasLetters(myString[i])){
                char = true;
            }else{
                return false;
            }
        }
        return num && char;
    }
}