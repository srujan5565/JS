document.getElementById("theme-toggle").addEventListener("click", function () {
    const body = document.getElementsByTagName("body")[0];
    const button = document.getElementById("theme-toggle");

    // Toggle dark mode on body
    body.classList.toggle("dark-mode");

    // Toggle button classes properly
    if (body.classList.contains("dark-mode")) {
        button.classList.remove("btn-light-mode");
        button.classList.add("btn-dark-mode");
        button.innerHTML = "Switch to Light Mode";
    } else {
        button.classList.remove("btn-dark-mode");
        button.classList.add("btn-light-mode");
        button.innerHTML = "Switch to Dark Mode";
    }
});
