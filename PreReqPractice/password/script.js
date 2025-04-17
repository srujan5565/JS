document.getElementById("toggle-password").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    if (this.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
});
