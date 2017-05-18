var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var address = document.getElementById("address");
var city = document.getElementById("city");
var postalCode = document.getElementById("postalCode");
var provinces = document.getElementById("provinces");
var age = document.getElementById("age");
var email = document.getElementById("email");
var password1 = document.getElementById("password");
var password2 = document.getElementById("confirmPassword");
var myForm = document.getElementById("myForm");

function submitForm() {
    if (!validateForm()) {
        return;
    }
    alert("Account creation successful! Your search for mezmorizing love begins now...");
    resetForm();
}

function resetForm() {

    fName.value = '';
    lName.value = '';
    address.value = '';
    city.value = '';
    postalCode.value = '';
    provinces.selectedIndex = 0;
    age.value = '';
    email.value = '';
    password1.value = '';
    password2.value = '';
}

function validateForm() {
    var formValid = true;
    var fNameValue = /.[a-zA-Z]{1,40}/;
    var lNameValue = /.[a-zA-Z]{1,40}/;
    var addressValue = /.\d{1,}[\s].[a-zA-Z]{1,}[\s].[a-zA-z]{1,}\.?/;
    var cityValue = /.[a-zA-Z]{1,}/;
    var postalCodeValue = /^([A-Za-z]\d[A-Za-z][-\s]\d[A-Za-z]\d)/;
    var ageValue = /.[0-9]{1,}/;
    var emailValue = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    var passValue = /.{6,}/;
    var capitalLetter = /[A-Z]/;
    var numberValue = /\d/;

    if (fNameValue.test(fName.value) === false) {
        fName.setCustomValidity("You must enter your first name.");
        formValid = false;
        return false;
    }

    if (lNameValue.test(lName.value) === false) {
        lName.setCustomValidity("You must enter your last name.");
        formValid = false;
        return false;
    }

    if (addressValue.test(address.value) === false) {
        address.setCustomValidity("You must enter your address.");
        formValid = false;
        return false;
        resetForm();
    }

    if (cityValue.test(city.value) === false) {
        city.setCustomValidity("You must enter your city.");
        formValid = false;
        return false;
    }

    if (postalCodeValue.test(postalCode.value) === false) {
        postalCode.setCustomValidity("You must enter your postal code in the correct format.");
        formValid = false;
        return false;
    }

    if (provinces.selectedIndex === 0) {
        provinces.setCustomValidity("You must select one of the below provinces from the drop down menu");
        formValid = false;
        provinces.selectedIndex = 0;
        return false;
    }

    if (age.value < 18 || age.value > 115 || ageValue.test(age.value) === false) {
        age.setCustomValidity("You must enter your age, be over 18, and less than 115.");
        formValid = false;
        return false;
    }

    if (emailValue.test(email.value) === false) {
        email.setCustomValidity("You must enter your email.");
        formValid = false;
        return false;
    }

    if (passValue.test(password1.value) === false || password1.value.localeCompare(password2.value) !== 0 ||
        capitalLetter.test(password1.value) === false || numberValue.test(password.value) === false) {
        pass.setCustomValidity("Password must be at least six (6) characters, with one (1) capital letter, one (1) number and both passwords must match.");
        formValid = false;
        return false;
    }

    if (formValid === false) {
        return false;
    }
    resetForm();
    return true;
}