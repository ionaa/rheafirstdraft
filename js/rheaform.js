//Validate form
var error = document.getElementById("error")

function formValidation() {
    var name = document.forms["myform"]["name"].value;

    if (name == "") {
        error.innerHTML = "Please Enter Your Name";
        event.preventDefault()
    } else {
        error.innerHTML = "";
    }
}

document.forms[0].addEventListener('submit', function(e) {
    var phonefield = document.getElementById("formphone");
    var emailfield = document.getElementById("formemail");
    var errormessage = document.getElementById("errormessage");
    if (!phonefield.value && !emailfield.value) {
        console.log("Im not submitting")
        errormessage.innerHTML = "Please provide an Email or Phone number";
        e.preventDefault();

    } else {
        errormessage.innerHTML = "";

    }


});

// Appointment Confirmation
document.forms[0].addEventListener('submit', function(e) {
    var name = document.getElementById("name").value;
    var phonefield = document.getElementById("formphone").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var treatments = document.getElementById("treatments").value;
    var confirm = document.getElementById("appconfirm");

    if (name && date && time && phonefield !== "") {
        confirm.innerHTML = "Thank you " + name + " Your appointment is set for " + date + " at " + time + " for a " + treatments;
        e.preventDefault();
    } else {
        confirm.innerHTML = "Please fill in all fields."
        e.preventDefault();
    }

});