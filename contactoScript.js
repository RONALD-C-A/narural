document.getElementById("open-contact").addEventListener("click", function() {
    const popup = document.getElementById("contact-popup");
    popup.style.display = "block";
});

document.getElementById("close-popup").addEventListener("click", function() {
    const popup = document.getElementById("contact-popup");
    popup.style.display = "none";
});
