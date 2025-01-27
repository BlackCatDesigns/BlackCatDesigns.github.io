function toggleLinks(event) {
    var links = event.nextElementSibling;
    if (links.style.display === "none" || links.style.display === "") {
        links.style.display = "block";
    } else {
        links.style.display = "none";
    }
}
