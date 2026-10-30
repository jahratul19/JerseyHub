

function goToProducts() {
    window.location.href = "products.html";
}


function buyJersey(jerseyName) {
    alert("Thanks for your interest in " + jerseyName + "! Please contact us to complete your order.");
}


function submitContact(event) {

    event.preventDefault();

    var name = document.getElementById("fullName").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name == "" || email == "" || subject == "" || message == "") {

        alert("Please fill in all fields.");

        return false;
    }

    alert("Thank you, " + name + "! Your demo message has been received.");

    event.target.reset();

    return false;
}
