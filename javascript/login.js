window.onload = function() {
    var inputEmail = document.getElementById('email');
    var inputPassword = document.getElementById('password');
    var error = document.querySelectorAll('.log-in-form p');
    var buttonLogIn = document.querySelector('button');
    var modalSign = document.querySelector('.modal-content h4');
    var emailValue = document.getElementById('email-value');
    var passwordValue = document.getElementById('password-value');

    // Result of the validations per field

    var emailValidationRes;
    var passwordValidationRes;

    // Add events to every one of the inputs
    
    inputEmail.addEventListener('blur', validateEmail);
    inputEmail.addEventListener('focus', removeErrorEmail);

    inputPassword.addEventListener('blur', validatePassword);
    inputPassword.addEventListener('focus', removeErrorPassword);

    buttonLogIn.addEventListener('click', result);

    // Define the validation functions

    function validateEmail(e) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
            emailValidationRes = e.target.value;
        } else {
            error[0].style.visibility = 'visible';
            emailValidationRes = 'Invalid value';
        }
    }
    
    function removeErrorEmail(e){
        error[0].style.visibility = 'hidden';
    }

    function validatePassword(e){
        if(e.target.value.length >= 8){
            if(!isNaN(e.target.value) || !containsNumber(e.target.value) || isASymbol(e.target.value) ){
                error[1].style.visibility = 'visible';
                passwordValidationRes = 'Invalid value';
            } else {
                passwordValidationRes= e.target.value;
            }
        } else {
            error[1].style.visibility = 'visible';
            passwordValidationRes = 'Invalid value';
        }
    }

    function removeErrorPassword(e){
        error[1].style.visibility = 'hidden';
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

    // Button

    function result(e){
        e.preventDefault();
        emailValue.innerHTML = emailValidationRes;
        passwordValue.innerHTML = passwordValidationRes;

        var control = 0;

        for (var i=0; i <= 1; i++){
            if (error[i].style.visibility == 'visible'){
                control ++;
            }
        }

        if (control == 0){
            fetch('https://basp-m2022-api-rest-server.herokuapp.com/login?email=' + inputEmail.value 
            + '&password=' + inputPassword.value)
            .then(function (response) {
                return response.json();
            })
            .then(function (jsonResponse) {
                console.log("json", jsonResponse);
                if (jsonResponse.success) {
                    console.log("Good", jsonResponse);
                    modal.style.display = "block";
                    modalSign.style.color = '#AACE9B';
                    modalSign.innerHTML = 'Employee logged in successfully';
                } else {
                    throw jsonResponse;
                }
            })
            .catch(function (error) {
                console.warn('Error', error);
                modal.style.display = "block";
                modalSign.style.color = '#d72d0f';
                modalSign.innerHTML = 'Incorrect email or password';
            })
        } else {
            modal.style.display = "block";
            modalSign.style.color = '#d72d0f';
            modalSign.innerHTML = 'Incorrect email or password';
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