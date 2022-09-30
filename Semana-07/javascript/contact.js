window.onload = function(){
    //ARRAY FOR SAVE ERRORS AND VALUES
    arrayErrors = [];

    //NAME VALIDATION
    var contactName = document.getElementById('name');
    var contactNameAlert = document.createElement('p');
    var contactNameSuccess = false;
    contactNameAlert.classList.add('red-font');
    contactName.onblur = validateContactName;
    contactName.onfocus = removeContactNameAlerts;
    function validateContactName(){
        if(isEmpty(contactName)){
            contactName.classList.add("red-border");
            contactNameAlert.textContent = "* Name field is required";
            contactName.insertAdjacentElement("afterend", contactNameAlert);
            arrayErrors[0] = 'Error! ' + contactNameAlert.textContent;
            contactNameSuccess = false;
        }else if(contactName.value.length < 4 && !hasLettersOrSpaces(contactName.value)){
            contactName.classList.add("red-border");
            contactNameAlert.textContent = "* Name must have 4 letters";
            contactName.insertAdjacentElement("afterend", contactNameAlert);
            arrayErrors[0] = 'Error! ' + contactNameAlert.textContent;
            contactNameSuccess = false;
        }else if(contactName.value.length < 4){
            contactName.classList.add("red-border");
            contactNameAlert.textContent = "* Name must have minimun 4 letters";
            contactName.insertAdjacentElement("afterend", contactNameAlert);
            arrayErrors[0] = 'Error! ' + contactNameAlert.textContent;
            contactNameSuccess = false;
        }else if(!hasLettersOrSpaces(contactName.value)){
            contactName.classList.add("red-border");
            contactNameAlert.textContent = "* Name must have only letters";
            contactName.insertAdjacentElement("afterend", contactNameAlert);
            arrayErrors[0] = 'Error! ' + contactNameAlert.textContent;
            contactNameSuccess = false;
        }
        else{
            contactName.classList.add("green-border");
            arrayErrors[0] = contactName.value.trim();
            contactNameSuccess = true;
        }
    }
    function removeContactNameAlerts(){
        contactName.classList.remove('red-border', 'green-border');
        contactNameAlert.remove();
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
            arrayErrors[1] = 'Error! ' + emailAlert.textContent;
            emailSuccess = false;
        }else if(!(emailExpression.test(email.value))){
            email.classList.add("red-border");
            emailAlert.textContent = "* Insert a valid email";
            email.insertAdjacentElement("afterend", emailAlert);
            arrayErrors[1] = 'Error! ' + emailAlert.textContent;
            emailSuccess = false;
        }else{
            email.classList.add("green-border");
            arrayErrors[1] = email.value.trim();
            emailSuccess = true;
        }
    }
    function removeEmailAlerts(){
        email.classList.remove("green-border", "red-border");
        emailAlert.remove();
    }

    //CONTACT AREA VALIDATION
    var area = document.getElementById('contact-area');
    var areaAlert = document.createElement('p');
    var areaSuccess = false;
    areaAlert.classList.add('red-font');
    area.onblur = validateArea;
    area.onfocus = removeAreaAlerts;
    function validateArea(){
        if(area.value == 'Select area'){
            area.classList.add("red-border");
            areaAlert.textContent = "* Please select an area";
            area.insertAdjacentElement("afterend", areaAlert);
            arrayErrors[2] = 'Error! ' + areaAlert.textContent;
            areaSuccess = false;
        }else{
            area.classList.add("green-border");
            arrayErrors[2] = area.value;
            areaSuccess = true;
        }
    }
    function removeAreaAlerts(){
        area.classList.remove("green-border", "red-border");
        areaAlert.remove();
    }

    //MESSAGE VALIDATION
    var message = document.getElementById("message");
    var messageAlert = document.createElement('p');
    var messageSuccess = false;
    messageAlert.classList.add("red-font");
    message.onblur = validateMessage;
    message.onfocus = removeMessageAlerts;
    function validateMessage(){
        if(isEmpty(message)){
            message.classList.add("red-border");
            messageAlert.textContent = "* Message field is required";
            message.insertAdjacentElement("afterend", messageAlert);
            arrayErrors[3] = 'Error! ' + messageAlert.textContent;
            messageSuccess = false;
        }else if((message.value.length < 3) && (!hasNumbers(message.value)) && (!hasLettersOrSpaces(message.value))){
            message.classList.add("red-border");
            messageAlert.textContent = "* Message must have minimun 3 charaters, letters and numbers";
            message.insertAdjacentElement("afterend", messageAlert);
            arrayErrors[3] = 'Error! ' + messageAlert.textContent;
            messageSuccess = false;
        }else if((message.value.length >= 3) && (!hasNumbers(message.value)) && (!hasLettersOrSpaces(message.value))){
            message.classList.add("red-border");
            messageAlert.textContent = "* Message must contain only letters and numbers";
            message.insertAdjacentElement("afterend", messageAlert);
            arrayErrors[3] = 'Error! ' + messageAlert.textContent;
        }else{
            message.classList.add("green-border");
            arrayErrors[3] = message.value.trim();
            messageSuccess = true;
        }
    }
    function removeMessageAlerts(){
        message.classList.remove("green-border", "red-border");
        messageAlert.remove();
    }

    //CLICK SEND BUTTON
    var btnSend = document.getElementById('btn-send');
    btnSend.onclick = function(e){
        e.preventDefault();
        validateContactName(contactName);
        validateEmail(email);
        validateArea(area);
        validateMessage(message);
        if(contactNameSuccess && emailSuccess && areaSuccess && messageSuccess){
            alert("Your message has been sent! \nName: " + contactName.value + "\nEmail: " + email.value + "\nArea: " + area.value
            + "\nMessage: " + message.value);
        }else{
            alert("Please check form data! \nName: " + arrayErrors[0] + "\nEmail: " + arrayErrors[1] + "\nArea: " + arrayErrors[2]
            + "\nMessage: " + arrayErrors[3]);
        }
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
}