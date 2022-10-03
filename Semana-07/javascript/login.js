window.onload = function(){
    //ARRAY FOR SAVE ERRORS
    var arrayErrors = [];

    //EMAIL VALIDATION
    var loginEmail = document.getElementById("login-email");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var loginEmailAlert = document.createElement('p');
    var isLoginEmailSuccess = false;
    loginEmailAlert.classList.add("red-font");
    loginEmail.onblur = validateEmail;
    loginEmail.onfocus = removeEmailAlerts;
    function validateEmail(){
        if(isEmpty(loginEmail)){
            loginEmail.classList.add("red-border");
            loginEmailAlert.textContent = "* Email field is required";
            loginEmail.insertAdjacentElement("afterend", loginEmailAlert);
            arrayErrors[0] = 'Error! ' + loginEmailAlert.textContent;
            isLoginEmailSuccess = false;
        }else if(!(emailExpression.test(loginEmail.value))){
            loginEmail.classList.add("red-border");
            loginEmailAlert.textContent = "* Insert a valid email";
            loginEmail.insertAdjacentElement("afterend", loginEmailAlert);
            arrayErrors[0] = 'Error! ' + loginEmailAlert.textContent;
            isLoginEmailSuccess = false;
        }else{
            loginEmail.classList.add("green-border");
            arrayErrors[0] = loginEmail.value.trim();
            isLoginEmailSuccess = true;
        }
    }
    function removeEmailAlerts(){
        loginEmail.classList.remove("green-border", "red-border");
        loginEmailAlert.remove();
    }

    //PASSWORD VALIDATION
    var loginPassword = document.getElementById("login-password");
    var loginPasswordAlert = document.createElement('p');
    var isLoginPasswordSuccess = false;
    loginPasswordAlert.classList.add("red-font");
    loginPassword.onblur = validatePassword;
    loginPassword.onfocus = removePasswordAlerts;
    function validatePassword(){
        if(isEmpty(loginPassword)){
            loginPassword.classList.add("red-border");
            loginPasswordAlert.textContent = "* Password field is required";
            loginPassword.insertAdjacentElement("afterend", loginPasswordAlert);
            arrayErrors[1] = 'Error! ' + loginPasswordAlert.textContent;
            isLoginPasswordSuccess = false;
        }else if(loginPassword.value.length < 8 && !hasNumbersAndLetters(loginPassword.value)){
            loginPassword.classList.add("red-border");
            loginPasswordAlert.textContent = "* Password must have minimun 8 characters includes numbers and letters";
            loginPassword.insertAdjacentElement("afterend", loginPasswordAlert);
            arrayErrors[1] = 'Error! ' + loginPasswordAlert.textContent;
            isLoginPasswordSuccess = false;
        }else if(loginPassword.value.length < 8){
            loginPassword.classList.add("red-border");
            loginPasswordAlert.textContent = "* Password must have minimun 8 characters";
            loginPassword.insertAdjacentElement("afterend", loginPasswordAlert);
            arrayErrors[1] = 'Error! ' + loginPasswordAlert.textContent;
            isLoginPasswordSuccess = false;
        }else if(!hasNumbersAndLetters(loginPassword.value)){
            loginPassword.classList.add("red-border");
            loginPasswordAlert.textContent = "* Password must have letters and numbers";
            loginPassword.insertAdjacentElement("afterend", loginPasswordAlert);
            arrayErrors[1] = 'Error! ' + loginPasswordAlert.textContent;
            isLoginPasswordSuccess = false;
        }else{
            loginPassword.classList.add('green-border');
            arrayErrors[1] = loginPassword.value;
            isLoginPasswordSuccess = true;
        }
    }
    function removePasswordAlerts(){
        loginPassword.classList.remove('red-border', 'green-border');
        loginPasswordAlert.remove();
    }

    //FETCH FUNCTION
    function fetchData(email, password){
        fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email='+email+'&password='+password)
            .then(function(response){
                return response.json();
            })
            .then(function(resp){
                if(resp.success){
                    modalMsg.classList.add("back-green");
                    modalAlert.textContent = resp.msg;
                    modalMsg.appendChild(modalAlert);
                }else{
                    throw resp;
                }
            })
            .catch(function(error){
                modalMsg.classList.add("back-red");
                modalAlert.textContent = error.msg;
                modalMsg.appendChild(modalAlert);
            })
    }

    //CLICK LOGIN BUTTON
    var loginButton = document.getElementById("btn-login");
    loginButton.onclick = function(e){
        e.preventDefault();
        validateEmail(loginEmail);
        validatePassword(loginPassword);
        if(isLoginPasswordSuccess && isLoginEmailSuccess){
            fetchData(loginEmail.value, loginPassword.value);
        }else{
            modalAlert.textContent = "Please check data!\n" + "\nEmail: " + arrayErrors[0] + "\nPassword: " + arrayErrors[1];
            modalMsg.appendChild(modalAlert);
        }
        modal.style.display = "block";
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
    // Get the modal
    var modal = document.getElementById("myModal");
    var modalMsg = document.getElementById("modal-msg");
    var modalAlert = document.createElement('p');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}