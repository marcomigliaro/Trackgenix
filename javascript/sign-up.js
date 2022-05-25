window.onload = function() {
    var inputName = document.getElementById('name');
    var inputLastName = document.getElementById('last-name');
    var inputDni = document.getElementById('dni');
    var inputDateOfBirth = document.getElementById('date-of-birth');
    var inputPhoneNumber = document.getElementById('phone-number');
    var inputAddress = document.getElementById('address');
    var inputLocation = document.getElementById('location');
    var inputPostalCode = document.getElementById('postal-code');
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    var inputRepeatPassword = document.getElementById('repeat-password');

    var error = document.querySelectorAll('.sign-up-form p');
    var buttonSignUp = document.querySelector('button');
    var modalSign = document.querySelector('.modal-content h4');

    var nameValue = document.getElementById('name-value');
    var lastNameValue = document.getElementById('last-name-value');
    var dniValue = document.getElementById('dni-value');
    var dateOfBirthValue = document.getElementById('date-of-birth-value');
    var phoneNumberValue = document.getElementById('phone-number-value');
    var addressValue = document.getElementById('address-value');
    var locationValue = document.getElementById('location-value');
    var postalCodeValue = document.getElementById('postal-code-value');
    var emailValue = document.getElementById('email-value');
    var passwordValue = document.getElementById('password-value');
    var repeatPasswordValue = document.getElementById('repeat-password-value');

    // Result of the validations per field

    var nameValidationRes;
    var lastNameValidationRes;
    var dniValidationRes;
    var dateOfBirthValidationRes;
    var phoneNumberValidationRes;
    var addressValidationRes;
    var locationValidationRes;
    var postalCodeValidationRes;
    var emailValidationRes;
    var passwordValidationRes;
    var repeatPasswordValidationRes;

    // Add events to every one of the inputs

    inputName.addEventListener('blur', validateName);
    inputName.addEventListener('focus', removeErrorName);

    inputLastName.addEventListener('blur', validateLastName);
    inputLastName.addEventListener('focus', removeErrorLastName);

    inputDni.addEventListener('blur', validateDni);
    inputDni.addEventListener('focus', removeErrorDni);

    inputDateOfBirth.addEventListener('blur', validateDateOfBirth);
    inputDateOfBirth.addEventListener('focus', removeErrorDateOfBirth);

    inputPhoneNumber.addEventListener('blur', validatePhoneNumber);
    inputPhoneNumber.addEventListener('focus', removeErrorPhoneNumber);

    inputAddress.addEventListener('blur', validateAddress);
    inputAddress.addEventListener('focus', removeErrorAddress);

    inputLocation.addEventListener('blur', validateLocation);
    inputLocation.addEventListener('focus', removeErrorLocation);

    inputPostalCode.addEventListener('blur', validatePostalCode);
    inputPostalCode.addEventListener('focus', removeErrorPostalCode);

    inputEmail.addEventListener('blur', validateEmail);
    inputEmail.addEventListener('focus', removeErrorEmail);

    inputPassword.addEventListener('blur', validatePassword);
    inputPassword.addEventListener('focus', removeErrorPassword);

    inputRepeatPassword.addEventListener('blur', validateRepeatPassword);
    inputRepeatPassword.addEventListener('focus', removeErrorRepeatPassword);

    buttonSignUp.addEventListener('click', result);

    // Define the validation functions

    function validateName(e) {
        if(e.target.value.length > 3){
            if(containsNumber(e.target.value) || isASymbol(e.target.value) ){
                error[0].style.visibility = 'visible';
                nameValidationRes = 'Invalid value';
            } else {
                nameValidationRes= e.target.value;
            }
        } else {
            error[0].style.visibility = 'visible';
            nameValidationRes = 'Invalid value';
        }
    }

    function removeErrorName(e) {
        error[0].style.visibility = 'hidden';
    }

    function validateLastName(e) {
        if(e.target.value.length > 3){
            if(containsNumber(e.target.value) || isASymbol(e.target.value) ){
                error[1].style.visibility = 'visible';
                lastNameValidationRes = 'Invalid value';
            } else {
                lastNameValidationRes= e.target.value;
            }
        } else {
            error[1].style.visibility = 'visible';
            lastNameValidationRes = 'Invalid value';
        }
    }

    function removeErrorLastName(e) {
        error[1].style.visibility = 'hidden';
    }

    function validateDni(e) {
        if(e.target.value.length > 7){
            if(isNaN(e.target.value) || isASymbol(e.target.value) ){
                error[2].style.visibility = 'visible';
                dniValidationRes = 'Invalid value';
            } else {
                dniValidationRes= e.target.value;
            }
        } else {
            error[2].style.visibility = 'visible';
            dniValidationRes = 'Invalid value';
        }
    }

    function removeErrorDni(e) {
        error[2].style.visibility = 'hidden';
    }

    function validateDateOfBirth(e) {
        if (Date.parse(e.target.value) > Date.now()) {
            error[3].style.visibility = 'visible';
            dateOfBirthValidationRes = 'Invalid value';
        } else {
            dateOfBirthValidationRes= e.target.value;
        }
    }

    function removeErrorDateOfBirth(e) {
        error[3].style.visibility = 'hidden';
    }

    function validatePhoneNumber(e) {
        if(e.target.value.length == 10){
            if(isNaN(e.target.value) || isASymbol(e.target.value) ){
                error[4].style.visibility = 'visible';
                phoneNumberValidationRes = 'Invalid value';
            } else {
                phoneNumberValidationRes= e.target.value;
            }
        } else {
            error[4].style.visibility = 'visible';
            phoneNumberValidationRes = 'Invalid value';
        }
    }

    function removeErrorPhoneNumber(e) {
        error[4].style.visibility = 'hidden';
    }

    function validateAddress(e) {
        if(e.target.value.length >= 5 && hasASpace(e.target.value)){
            if(!isNaN(e.target.value) || !containsNumber(e.target.value) || isASymbol(e.target.value) ){
                error[5].style.visibility = 'visible';
                addressValidationRes = 'Invalid value';
            } else {
                addressValidationRes = e.target.value;
            }
        } else {
            error[5].style.visibility = 'visible';
            addressValidationRes = 'Invalid value';
        }
    }

    function removeErrorAddress(e) {
        error[5].style.visibility = 'hidden';
    }

    function validateLocation(e) {
        if(quantityLetters(e.target.value)){
            if(isASymbol(e.target.value)){
                error[6].style.visibility = 'visible';
                locationValidationRes = 'Invalid value';
            } else {
                locationValidationRes= e.target.value;
            }
        } else {
            error[6].style.visibility = 'visible';
            locationValidationRes = 'Invalid value';
        }
    }

    function removeErrorLocation(e) {
        error[6].style.visibility = 'hidden';
    }

    function validatePostalCode(e) {
        if(e.target.value.length >= 4 && e.target.value.length <= 5 ){
            if(isNaN(e.target.value) || isASymbol(e.target.value) ){
                error[7].style.visibility = 'visible';
                postalCodeValidationRes = 'Invalid value';
            } else {
                postalCodeValidationRes= e.target.value;
            }
        } else {
            error[7].style.visibility = 'visible';
            postalCodeValidationRes = 'Invalid value';
        }
    }

    function removeErrorPostalCode(e) {
        error[7].style.visibility = 'hidden';
    }

    function validateEmail(e) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            emailValidationRes = e.target.value;
        } else {
            error[8].style.visibility = 'visible';
            emailValidationRes = 'Invalid value';
        }
    }
    
    function removeErrorEmail(e){
        error[8].style.visibility = 'hidden';
    }

    function validatePassword(e){
        if(e.target.value.length >= 8){
            if(!isNaN(e.target.value) || !containsNumber(e.target.value) || isASymbol(e.target.value) ){
                error[9].style.visibility = 'visible';
                passwordValidationRes = 'Invalid value';
            } else {
                passwordValidationRes = e.target.value;
            }
        } else {
            error[9].style.visibility = 'visible';
            passwordValidationRes = 'Invalid value';
        }
    }

    function removeErrorPassword(e) {
        error[9].style.visibility = 'hidden';
    }

    function validateRepeatPassword(e){
        if(e.target.value.length >= 8){
            if(!isNaN(e.target.value) || !containsNumber(e.target.value) || isASymbol(e.target.value) ){
                    error[10].style.visibility = 'visible';
                    repeatPasswordValidationRes = 'Invalid value';
            } else {
                if(e.target.value == passwordValidationRes){
                    repeatPasswordValidationRes = e.target.value;
                } else {
                    error[10].style.visibility = 'visible';
                    repeatPasswordValidationRes = 'Invalid value';
                }
            }
        } else {
                error[10].style.visibility = 'visible';
                repeatPasswordValidationRes = 'Invalid value';
        }
    }

    function removeErrorRepeatPassword(e) {
        error[10].style.visibility = 'hidden';
    }

    //Check if there are digits in the string
    function containsNumber (string) {
        string = string.split(" ").join("");
        var control = 0;
        for (var i=0; i < string.length; i++) {
            if (Number(string[i]) == string[i]) {
                control ++;
            }
        }
        //returns true if the string contains digits
        if (control == 0) {
            return false;
        } else {
            return true;
        }
    }

    //Check if there are special characters in the string
    function isASymbol (string) {
        var symbols = '!"#$%&/()=?¡¿|¨*][_:;,.-{}+¬°~^`@'+"'";
        var control = 0;
        for (var i=0; i < string.length; i++) {
            if (symbols.includes(string[i])){
                control ++;
            }
        }
    
        //returns true if the string contains a special character
        if (control == 0) {
            return false;
        } else {
            return true;
        }
    }

    //Count the number of letter
    function quantityLetters (string) {
        var letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        var control = 0;
        for (var i=0; i < string.length; i++) {
            if(letters.includes(string[i])){
                control ++;
            }
        }
        return (control > 3); 
    }

    //Checks if there is a space
    function hasASpace (string) {
        if (string.indexOf(' ') == string.lastIndexOf(' ')) {
            if ((string.indexOf(' ') > 0) && (string.indexOf(' ') < (string.length - 1))) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    // Upload data from LocalStorage to form

    var dateTransformedForForm = transformDateForm(localStorage.getItem('dob'));

    inputName.value = localStorage.getItem('name') ? localStorage.getItem('name') : '';
    inputLastName.value = localStorage.getItem('lastName') ? localStorage.getItem('lastName') : '';
    inputDni.value = localStorage.getItem('dni') ? localStorage.getItem('dni') : '';
    inputDateOfBirth.value = localStorage.getItem('dob') ? dateTransformedForForm : '';
    inputPhoneNumber.value = localStorage.getItem('phone') ? localStorage.getItem('phone') : '';
    inputAddress.value = localStorage.getItem('address') ? localStorage.getItem('address') : '';
    inputLocation.value = localStorage.getItem('city') ? localStorage.getItem('city') : '';
    inputPostalCode.value = localStorage.getItem('zip') ? localStorage.getItem('zip') : '';
    inputEmail.value = localStorage.getItem('email') ? localStorage.getItem('email') : '';
    inputPassword.value = localStorage.getItem('password') ? localStorage.getItem('password') : '';
    inputRepeatPassword.value = localStorage.getItem('password2') ? localStorage.getItem('password2') : '';

    // Transforms from date input field (YYYY-MM-DD) to MM/DD/YYYY
    function transformDateRequest(date) {
        var dateTransformed = date.substring(5, 7) + '/' + date.substring(8, date.length) + '/' + date.substring(0, 4);
        return dateTransformed;
    }

    // Transforms from MM/DD/YYYY to YYYY-MM-DD
    function transformDateForm(date) {
        var dateTransformed = date.substring(6, date.length) + '-' + date.substring(0, 2) + '-' + date.substring(3, 5);
        return dateTransformed;
    }

    // Button
    
    function result(e){
        e.preventDefault();
        nameValue.innerHTML = nameValidationRes;
        lastNameValue.innerHTML = lastNameValidationRes;
        dniValue.innerHTML = dniValidationRes;
        dateOfBirthValue.innerHTML = dateOfBirthValidationRes;
        phoneNumberValue.innerHTML = phoneNumberValidationRes;
        addressValue.innerHTML = addressValidationRes;
        locationValue.innerHTML = locationValidationRes;
        postalCodeValue.innerHTML = postalCodeValidationRes;
        emailValue.innerHTML = emailValidationRes;
        passwordValue.innerHTML = passwordValidationRes;
        repeatPasswordValue.innerHTML = repeatPasswordValidationRes;

        var dateTransformedForApi = transformDateRequest(inputDateOfBirth.value);
        var control = 0;

        for (var i=0; i <= 10; i++){
            if (error[i].style.visibility == 'visible'){
                control ++;
            }
        }

        console.log(control);

        if (control == 0){
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/signup?name=' + inputName.value 
            + '&lastName=' + inputLastName.value + '&dni=' + inputDni.value + '&dob=' + 
            dateTransformedForApi + '&phone=' + inputPhoneNumber.value + 
            '&address=' + inputAddress.value + '&city=' + inputLocation.value + '&zip=' + 
            inputPostalCode.value + '&email=' + inputEmail.value + '&password=' + 
            inputPassword.value + '&password=' + inputRepeatPassword.value)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonResponse) {
                console.log("json", jsonResponse);
                if (jsonResponse.success) {
                    console.log("Good", jsonResponse);
                    localStorage.setItem('name', jsonResponse.data.name);
                    localStorage.setItem('lastName', jsonResponse.data.lastName);
                    localStorage.setItem('dni', jsonResponse.data.dni);
                    localStorage.setItem('dob', jsonResponse.data.dob);
                    localStorage.setItem('phone', jsonResponse.data.phone);
                    localStorage.setItem('address', jsonResponse.data.address);
                    localStorage.setItem('city', jsonResponse.data.city);
                    localStorage.setItem('zip', jsonResponse.data.zip);
                    localStorage.setItem('email', jsonResponse.data.email);
                    localStorage.setItem('password', jsonResponse.data.password[0]);
                    localStorage.setItem('password2', jsonResponse.data.password[1]);
                    modal.style.display = "block";
                    modalSign.style.color = '#AACE9B';
                    modalSign.innerHTML = 'Employee created successfully';
                } else {
                    throw jsonResponse;
                }
            })
            .catch(function (error) {
                console.warn('Error', error);
                modal.style.display = "block";
                modalSign.style.color = '#d72d0f';
                modalSign.innerHTML = 'Error: Please correct invalid values';
            })
        } else {
            modal.style.display = "block";
            modalSign.style.color = '#d72d0f';
            modalSign.innerHTML = 'Error: Please correct invalid values';
        }
    }
    
    // Handling modal

    var modal = document.getElementById('my-modal');
    var span = document.getElementsByClassName('close')[0];

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}