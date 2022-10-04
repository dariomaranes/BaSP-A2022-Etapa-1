window.onload = function(){
    //ARRAY FOR SAVE ERRORS AND VALUES
    var arrayErrors = [];

    //NAME VALIDATION
    var name = document.getElementById('su-name');
    var nameAlert = document.createElement('p');
    var nameSuccess = false;
    nameAlert.classList.add('red-font');
    name.onblur = validateName;
    name.onfocus = removeNameAlerts;
    function validateName(){
        if(isEmpty(name)){
            name.classList.add('red-border');
            nameAlert.textContent = "* Name field is required";
            name.insertAdjacentElement('afterend', nameAlert);
            arrayErrors[0] = 'Error! ' + nameAlert.textContent;
            nameSuccess = false;
        }else if(name.value.length < 4 && !hasLettersOrSpaces(name.value)){
            name.classList.add('red-border');
            nameAlert.textContent = "* Name must have minimun 4 letters";
            name.insertAdjacentElement('afterend', nameAlert);
            arrayErrors[0] = 'Error! ' + nameAlert.textContent;
            nameSuccess = false;
        }else if(name.value.length < 4){
            name.classList.add('red-border');
            nameAlert.textContent = "* Name must have 4 characters";
            name.insertAdjacentElement('afterend', nameAlert);
            arrayErrors[0] = 'Error! ' + nameAlert.textContent;
            nameSuccess = false;
        }else if(!hasLettersOrSpaces(name.value)){
            name.classList.add('red-border');
            nameAlert.textContent = "* Name must have only letters";
            name.insertAdjacentElement('afterend', nameAlert);
            arrayErrors[0] = 'Error! ' + nameAlert.textContent;
            nameSuccess = false;
        }else{
            name.classList.add('green-border');
            arrayErrors[0] = name.value.trim();
            nameSuccess = true;
        }
    }
    function removeNameAlerts(){
        name.classList.remove('green-border', 'red-border');
        nameAlert.remove();
    }

    //LASTNAME VALIDATION
    var lastName = document.getElementById('last-name');
    var lastNameAlert = document.createElement('p');
    var lastNameSuccess = false;
    lastNameAlert.classList.add('red-font');
    lastName.onblur = validateLastName;
    lastName.onfocus = removeLastNameAlerts;
    function validateLastName(){
        if(isEmpty(lastName)){
            lastName.classList.add('red-border');
            lastNameAlert.textContent = "* Last Name field is required";
            lastName.insertAdjacentElement('afterend', lastNameAlert);
            arrayErrors[1] = 'Error! ' + lastNameAlert.textContent;
            lastNameSuccess = false;
        }else if(lastName.value.length < 4 || !hasLettersOrSpaces(name.value)){
            lastName.classList.add('red-border');
            lastNameAlert.textContent = "* Last Name must have minimun 4 letters";
            lastName.insertAdjacentElement('afterend', lastNameAlert);
            arrayErrors[1] = 'Error! ' + lastNameAlert.textContent;
            lastNameSuccess = false;
        }
        else if(!hasLettersOrSpaces(lastName.value)){
            lastName.classList.add('red-border');
            lastNameAlert.textContent = "* Last Name must have only letters";
            lastName.insertAdjacentElement('afterend', lastNameAlert);
            arrayErrors[1] = 'Error! ' + lastNameAlert.textContent;
            lastNameSuccess = false;
        }else{
            lastName.classList.add('green-border');
            arrayErrors[1] = lastName.value.trim();
            lastNameSuccess = true;
        }
    }
    function removeLastNameAlerts(){
        lastName.classList.remove('green-border', 'red-border');
        lastNameAlert.remove();
    }

    //ID VALIDATION
    var suId = document.getElementById('su-id');
    var suIdAlert = document.createElement('p');
    var suIdSuccess = false;
    suIdAlert.classList.add('red-font');
    suId.onblur = validateId;
    suId.onfocus = removeIdAlerts;
    function validateId(){
        if(isEmpty(suId)){
            suId.classList.add('red-border');
            suIdAlert.textContent = "* ID field is required";
            suId.insertAdjacentElement('afterend', suIdAlert);
            arrayErrors[2] = 'Error! ' + suIdAlert.textContent;
            suIdSuccess = false;
        }else if(suId.value.length < 7 || suId.value.length > 8){
            suId.classList.add('red-border');
            suIdAlert.textContent = "* ID field must have between 7 and 8 numbers";
            suId.insertAdjacentElement('afterend', suIdAlert);
            arrayErrors[2] = 'Error! ' + suIdAlert.textContent;
            suIdSuccess = false;
        }else if(!(hasOnlyNumbers(suId.value))){
            suId.classList.add('red-border');
            suIdAlert.textContent = "* ID field must have only numbers";
            suId.insertAdjacentElement('afterend', suIdAlert);
            arrayErrors[2] = 'Error! ' + suIdAlert.textContent;
            suIdSuccess = false;
        }else{
            suId.classList.add('green-border');
            arrayErrors[2] = suId.value.trim();
            suIdSuccess = true;
        }
    }
    function removeIdAlerts(){
        suId.classList.remove('green-border', 'red-border');
        suIdAlert.remove();
    }

    //DATE OF BIRTH VALIDATION
    var birthDate = document.getElementById('birth-date');
    var birthDateAlert = document.createElement('p');
    var birthDateSuccess = false;
    var birthFormated = '';
    birthDateAlert.classList.add('red-font');
    birthDate.onblur = validateBirth;
    birthDate.onfocus = removeBirthAlerts;
    function validateBirth(){
        if(isEmpty(birthDate)){
            birthDate.classList.add('red-border');
            birthDateAlert.textContent = "* Date of Birth is required";
            birthDate.insertAdjacentElement('afterend', birthDateAlert);
            arrayErrors[3] = 'Error! ' + birthDateAlert.textContent;
            birthDateSuccess = false;
        }else{
            birthDate.classList.add('green-border');
            var [year, month, day] = birthDate.value.split('-');
            birthFormated = [month, day, year].join('/');
            arrayErrors[3] = birthFormated;
            birthDateSuccess = true;
        }
    }
    function removeBirthAlerts(){
        birthDate.classList.remove('green-border', 'red-border');
        birthDateAlert.remove();
    }

    //PHONE NUMBER VALIDATION
    var phoneNumber = document.getElementById('phone-number');
    var phoneNumberAlert = document.createElement('p');
    var phoneNumberSuccess = false;
    phoneNumberAlert.classList.add('red-font');
    phoneNumber.onblur = validatePhoneNumber;
    phoneNumber.onfocus = removePhoneNumberAlerts;
    function validatePhoneNumber(){
        if(isEmpty(phoneNumber)){
            phoneNumber.classList.add('red-border');
            phoneNumberAlert.textContent = "* Phone Number is required";
            phoneNumber.insertAdjacentElement('afterend', phoneNumberAlert);
            arrayErrors[4] = 'Error! ' + phoneNumberAlert.textContent;
            phoneNumberSuccess = false;
        }else if(phoneNumber.value.length != 10 && !(hasOnlyNumbers(phoneNumber.value))){
            phoneNumber.classList.add('red-border');
            phoneNumberAlert.textContent = "* Phone Number must contain 10 numeric characters";
            phoneNumber.insertAdjacentElement('afterend', phoneNumberAlert);
            arrayErrors[4] = 'Error! ' + phoneNumberAlert.textContent;
            phoneNumberSuccess = false;
        }else if(phoneNumber.value.length != 10){
            phoneNumber.classList.add('red-border');
            phoneNumberAlert.textContent = "* Phone Number must contain 10 numbers";
            phoneNumber.insertAdjacentElement('afterend', phoneNumberAlert);
            arrayErrors[4] = 'Error! ' + phoneNumberAlert.textContent;
            phoneNumberSuccess = false;
        }else if(!(hasOnlyNumbers(phoneNumber.value))){
            phoneNumber.classList.add('red-border');
            phoneNumberAlert.textContent = "* Phone Number must contain only numbers";
            phoneNumber.insertAdjacentElement('afterend', phoneNumberAlert);
            arrayErrors[4] = 'Error! ' + phoneNumberAlert.textContent;
            phoneNumberSuccess = false;
        }else{
            phoneNumber.classList.add('green-border');
            arrayErrors[4] = phoneNumber.value.trim();
            phoneNumberSuccess = true;
        }
    }
    function removePhoneNumberAlerts(){
        phoneNumber.classList.remove('green-border', 'red-border');
        phoneNumberAlert.remove();
    }

    //ADDRES VALIDATION
    var address = document.getElementById('address');
    var addressAlert = document.createElement('p');
    var addressSuccess = false;
    addressAlert.classList.add('red-font');
    address.onblur = validateAddress;
    address.onfocus = removeAddressAlerts;
    function validateAddress(){
        if(isEmpty(address)){
            address.classList.add('red-border');
            addressAlert.textContent = "* Address is required";
            address.insertAdjacentElement('afterend', addressAlert);
            arrayErrors[5] = 'Error! ' + addressAlert.textContent;
            addressSuccess = false;
        }else if(address.value.length < 5){
            address.classList.add('red-border');
            addressAlert.textContent = "* Address must have minimun 5 characters";
            address.insertAdjacentElement('afterend', addressAlert);
            arrayErrors[5] = 'Error! ' + addressAlert.textContent;
            addressSuccess = false;
        }else if((address.value.length >= 5) && hasOnlyNumbers(address.value)){
            address.classList.add('red-border');
            addressAlert.textContent = "* Address must have 5 characters includes alphabetic";
            address.insertAdjacentElement('afterend', addressAlert);
            arrayErrors[5] = 'Error! ' + addressAlert.textContent;
            addressSuccess = false;
        }else if((address.value.length >= 5) && hasLettersOrSpaces(address.value)){
            address.classList.add('red-border');
            addressAlert.textContent = "* Address must have 5 characters includes numeric";
            address.insertAdjacentElement('afterend', addressAlert);
            arrayErrors[5] = 'Error! ' + addressAlert.textContent;
            addressSuccess = false;
        }else if(!address.value.includes(' ')){
            address.classList.add('red-border');
            addressAlert.textContent = "* Address must include 1 space between numbers and letters";
            address.insertAdjacentElement('afterend', addressAlert);
            arrayErrors[5] = 'Error! ' + addressAlert.textContent;
            addressSuccess = false;
        }
        else{
            address.classList.add('green-border');
            arrayErrors[5] = address.value.trim();
            addressSuccess = true;
        }
    }
    function removeAddressAlerts(){
        address.classList.remove('green-border', 'red-border');
        addressAlert.remove();
    }

    //CITY VALIDATION
    var city = document.getElementById('city');
    var cityAlert = document.createElement('p');
    var citySuccess = false;
    cityAlert.classList.add('red-font');
    city.onblur = validateCity;
    city.onfocus = removeCityAlerts;
    function validateCity(){
        if(isEmpty(city)){
            city.classList.add('red-border');
            cityAlert.textContent = "* City is required";
            city.insertAdjacentElement('afterend', cityAlert);
            arrayErrors[6] = 'Error! ' + cityAlert.textContent;
            citySuccess = false;
        }else if(city.value.length < 4){
            city.classList.add('red-border');
            cityAlert.textContent = "* City must have more than 3 characters";
            city.insertAdjacentElement('afterend', cityAlert);
            arrayErrors[6] = 'Error! ' + cityAlert.textContent;
            citySuccess = false;
        }
        else{
            city.classList.add('green-border');
            arrayErrors[6] = city.value.trim();
            citySuccess = true;
        }
    }
    function removeCityAlerts(){
        city.classList.remove('green-border', 'red-border');
        cityAlert.remove();
    }

    //ADDRESS CODE VALIDATION
    var addressCode = document.getElementById('address-code');
    var addressCodeAlert = document.createElement('p');
    var addressCodeSuccess = false;
    addressCodeAlert.classList.add('red-font');
    addressCode.onblur = validateAddressCode;
    addressCode.onfocus = removeAddresCodeAlerts;
    function validateAddressCode(){
        if(isEmpty(addressCode)){
            addressCode.classList.add('red-border');
            addressCodeAlert.textContent = "* Address Code is required";
            addressCode.insertAdjacentElement('afterend', addressCodeAlert)
            arrayErrors[7] = 'Error! ' + addressCodeAlert.textContent;
            addressCodeSuccess = false;
        }else if(!(addressCode.value.length >= 4 && addressCode.value.length <= 5)){
            addressCode.classList.add('red-border');
            addressCodeAlert.textContent = "* Address field must have between 4 and 5 characters";
            addressCode.insertAdjacentElement('afterend', addressCodeAlert);
            arrayErrors[7] = 'Error! ' + addressCodeAlert.textContent;
            addressCodeSuccess = false;
        }else if(!hasOnlyNumbers(addressCode.value)){
            addressCode.classList.add('red-border');
            addressCodeAlert.textContent = "* Address field is only numeric";
            addressCode.insertAdjacentElement('afterend', addressCodeAlert);
            arrayErrors[7] = 'Error! ' + addressCodeAlert.textContent;
            addressCodeSuccess = false;
        }else{
            addressCode.classList.add('green-border');
            arrayErrors[7] = addressCode.value.trim();
            addressCodeSuccess = true;
        }
    }
    function removeAddresCodeAlerts(){
        addressCode.classList.remove('green-border', 'red-border');
        addressCodeAlert.remove();
    }

    //EMAIL VALIDATION
    var email = document.getElementById("email");
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailAlert = document.createElement('p');
    var emailSuccess = false;
    emailAlert.classList.add("red-font");
    email.onblur = validateEmail;
    email.onfocus = removeEmailAlerts;
    function validateEmail(){
        if(isEmpty(email)){
            email.classList.add("red-border");
            emailAlert.textContent = "* Email field is required";
            email.insertAdjacentElement("afterend", emailAlert);
            arrayErrors[8] = 'Error! ' + emailAlert.textContent;
            emailSuccess = false;
        }else if(!(emailExpression.test(email.value))){
            email.classList.add("red-border");
            emailAlert.textContent = "* Insert a valid email";
            email.insertAdjacentElement("afterend", emailAlert);
            arrayErrors[8] = 'Error! ' + emailAlert.textContent;
            emailSuccess = false;
        }else{
            email.classList.add("green-border");
            arrayErrors[8] = email.value.trim();
            emailSuccess = true;
        }
    }
    function removeEmailAlerts(){
        email.classList.remove("green-border", "red-border");
        emailAlert.remove();
    }

    //PASSWORD VALIDATION
    var suPassword = document.getElementById('su-password');
    var suPasswordAlert = document.createElement('p');
    var suPasswordSuccess = false;
    suPasswordAlert.classList.add('red-font');
    suPassword.onblur = validateSuPassword;
    suPassword.onfocus = removeSuPasswordAlerts;
    function validateSuPassword(){
        if(isEmpty(suPassword)){
            suPassword.classList.add("red-border");
            suPasswordAlert.textContent = "* Password field is required";
            suPassword.insertAdjacentElement("afterend", suPasswordAlert);
            arrayErrors[9] = 'Error! ' + suPasswordAlert.textContent;
            suPasswordSuccess = false;
        }else if(suPassword.value.length < 8 && !hasNumbersAndLetters(suPassword.value)){
            suPassword.classList.add("red-border");
            suPasswordAlert.textContent = "* Password must have minimun 8 characters includes numbers and letters";
            suPassword.insertAdjacentElement("afterend", suPasswordAlert);
            arrayErrors[9] = 'Error! ' + suPasswordAlert.textContent;
            suPasswordSuccess = false;
        }else if(suPassword.value.length < 8){
            suPassword.classList.add("red-border");
            suPasswordAlert.textContent = "* Password must have minimun 8 characters";
            suPassword.insertAdjacentElement("afterend", suPasswordAlert);
            arrayErrors[9] = 'Error! ' + suPasswordAlert.textContent;
            suPasswordSuccess = false;
        }else if(!hasNumbersAndLetters(suPassword.value)){
            suPassword.classList.add("red-border");
            suPasswordAlert.textContent = "* Password must have letters and numbers";
            suPassword.insertAdjacentElement("afterend", suPasswordAlert);
            arrayErrors[9] = 'Error! ' + suPasswordAlert.textContent;
            suPasswordSuccess = false;
        }else{
            suPassword.classList.add('green-border');
            arrayErrors[9] = suPassword.value;
            suPasswordSuccess = true;
        }
    }
    function removeSuPasswordAlerts(){
        suPassword.classList.remove("green-border", "red-border");
        suPasswordAlert.remove();
    }

    //REPEAT PASSWORD VALIDATION
    var repeatPassword = document.getElementById('su-repeat-password');
    var repeatPasswordAlert = document.createElement('p');
    var repeatPasswordSuccess = false;
    repeatPasswordAlert.classList.add('red-font');
    repeatPassword.onblur = validateRepeatPassword;
    repeatPassword.onfocus = removeRepeatPasswordAlerts;
    function validateRepeatPassword(){
        if(isEmpty(repeatPassword)){
            repeatPassword.classList.add("red-border");
            repeatPasswordAlert.textContent = "* Repeat Password field is required";
            repeatPassword.insertAdjacentElement("afterend", repeatPasswordAlert);
            arrayErrors[10] = 'Error! ' + repeatPasswordAlert.textContent;
            repeatPasswordSuccess = false;
        }else if(repeatPassword.value !== suPassword.value){
            repeatPassword.classList.add("red-border");
            repeatPasswordAlert.textContent = "* Passwords dont match, please check";
            repeatPassword.insertAdjacentElement("afterend", repeatPasswordAlert);
            arrayErrors[10] = 'Error! ' + repeatPasswordAlert.textContent;
            repeatPasswordSuccess = false;
        }else{
            repeatPassword.classList.add('green-border');
            arrayErrors[10] = repeatPassword.value;
            repeatPasswordSuccess = true;
        }
    }
    function removeRepeatPasswordAlerts(){
        repeatPassword.classList.remove("green-border", "red-border");
        repeatPasswordAlert.remove();
    }

    function fetchData(name, lastName, suId, birthFormated, phoneNumber, address, city, addressCode,
                email, suPassword){
        var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?';
        fetch(url +'name='+name+'&lastName='+lastName+'&dni='+suId+'&dob='+birthFormated
                    +'&phone='+phoneNumber+'&address='+address+'&city='+city+'&zip='+addressCode
                    +'&email='+email+'&password='+suPassword)
            .then(function (response) {
                return response.json();
            })
            .then(function (response) {
                if (response.success) {
                    return response;
                } else {
                    throw response;
                }
            })
            .then(function (resp) {
                localStorage.setItem('hasData', 'value');
                localStorage.setItem('id', resp.data.id);
                localStorage.setItem('name', resp.data.name);
                localStorage.setItem('lastName', resp.data.lastName);
                localStorage.setItem('dni', resp.data.dni);
                localStorage.setItem('dob', resp.data.dob);
                localStorage.setItem('phone', resp.data.phone);
                localStorage.setItem('address', resp.data.address);
                localStorage.setItem('city', resp.data.city);
                localStorage.setItem('zip', resp.data.zip);
                localStorage.setItem('email', resp.data.email);
                localStorage.setItem('password', resp.data.password);
                modalMsg.classList.add("back-green");
                modalAlert.textContent = resp.msg;
                modalMsg.appendChild(modalAlert);
            })
            .catch(function (error) {
                errorText = 'Some inputs are invalid, please check!';
                modalAlert.textContent = errorText;
                modalMsg.appendChild(modalAlert);
                for(i=0; i<error.errors.length; i++){
                    var paragraph = document.createElement('p');
                    paragraph.innerText = error.errors[i].msg;
                    modalMsg.appendChild(paragraph);
                }
                modalMsg.classList.add("back-red");
            });
    }

    //SET INPUT VALUES ON ONLOAD, SAVED IN LOCAL STORAGE
    if(window.localStorage.hasOwnProperty('hasData')){
        name.value = localStorage.getItem('name');
        lastName.value = localStorage.getItem('lastName');
        suId.value = localStorage.getItem('dni');
        birthDate.value += localStorage.getItem('dob').substring(6, 10)
                        + '-' + localStorage.getItem('dob').substring(0, 2)
                        + '-' + localStorage.getItem('dob').substring(3, 5);
        phoneNumber.value = localStorage.getItem('phone');
        address.value = localStorage.getItem('address');
        city.value = localStorage.getItem('city');
        addressCode.value = localStorage.getItem('zip');
        email.value = localStorage.getItem('email');
        suPassword.value = localStorage.getItem('password');
    }

    //SIGN UP BUTTON
    var signUpButton = document.getElementById("btn-signup");
    signUpButton.onclick = function(e){
        e.preventDefault();
        validateName(name);
        validateLastName(lastName);
        validateId(suId);
        validateBirth(birthFormated);
        validatePhoneNumber(phoneNumber);
        validateAddress(address);
        validateCity(city);
        validateAddressCode(addressCode);
        validateEmail(email);
        validateSuPassword(suPassword);
        validateRepeatPassword(repeatPassword);
        if(nameSuccess && lastNameSuccess && suIdSuccess && birthDateSuccess && phoneNumberSuccess && addressSuccess
            && citySuccess && addressCodeSuccess && emailSuccess && suPasswordSuccess && repeatPasswordSuccess){
            fetchData(name.value, lastName.value, suId.value, birthFormated, phoneNumber.value, address.value,
                city.value, addressCode.value, email.value, suPassword.value);
        }else{
            arrayErrors.forEach(function(element){
                var paragraph = document.createElement('p');
                paragraph.innerText = element;
                modalMsg.appendChild(paragraph);
            })
        }
        modal.style.display = "block";
    }

    //CLICK BACK BUTTON
    var backSignUpButton = document.getElementById("btn-back");
    backSignUpButton.onclick = function(){
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
    function hasLettersOrSpaces(myString) {
        for (var i=0 ; i<myString.length; i++){
            if (!((myString[i] >= 'a' && myString[i] <= 'z') || (myString[i] >= 'A' && myString[i] <= 'Z')
                || myString[i] == ' ')){
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

    function hasOnlyNumbers(myString){
        for(var i=0; i<myString.length; i++){
            if(!hasNumbers(myString[i])){
                return false;
            }
        }
        return true;
    }

    function hasLetters(myString){
        for(var i=0; i<myString.length; i++){
            if(!((myString[i] >= 'a' && myString[i] <= 'z') || (myString[i] >= 'A' && myString[i] <= 'Z'))){
                return false;
            }
        }
        return true;
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
        modalMsg.classList.remove("back-green", "back-red");
        modalMsg.innerHTML = "";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalMsg.classList.remove("back-green", "back-red");
            modalMsg.innerHTML = "";
        }
    }
}