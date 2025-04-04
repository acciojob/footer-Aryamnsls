// Optional: Highlight active section when clicked
document.querySelectorAll(".box a").forEach(link => {
    link.addEventListener("click", function() {
        alert("You clicked: " + this.innerText);
    });
});
