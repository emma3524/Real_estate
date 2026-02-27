function scrollToProperties() {
    document.getElementById("properties").scrollIntoView({ behavior: "smooth" });
}

function filterProperties() {
    const filter = document.getElementById("priceFilter").value;
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        if (filter === "all" || card.dataset.price === filter) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function contactAlert() {
    alert("Agent will contact you shortly!");
}

function submitForm(event) {
    event.preventDefault();
    alert("Message sent successfully!");
}