const reviewsPerPage = 3;
let currentPage = 1;

function displayReviews() {
    const reviews = document.querySelectorAll(".review-card");
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    reviews.forEach((review) => (review.style.display = "none"));

    const start = (currentPage - 1) * reviewsPerPage;
    const end = start + reviewsPerPage;
    for (let i = start; i < end && i < reviews.length; i++) {
        reviews[i].style.display = "block";
    }

    document.getElementById("page-number").innerText = `Page ${currentPage} of ${totalPages}`;

    document.querySelector("button[onclick='changePage(-1)']").disabled = currentPage === 1;
    document.querySelector("button[onclick='changePage(1)']").disabled = currentPage === totalPages;
}

function changePage(step) {
    const totalPages = Math.ceil(document.querySelectorAll(".review-card").length / reviewsPerPage);
    currentPage = Math.min(Math.max(1, currentPage + step), totalPages);
    displayReviews();
}

displayReviews();

function handleLogin(event) {
    event.preventDefault();

    const name = document.getElementById("name").value; 
    sessionStorage.setItem("username", name);
    alert(`Halo, Selamat Datang, ${name}!`); 
    
   
    const welcomeMessage = document.getElementById("welcome-message");
    welcomeMessage.textContent = `Halo, Selamat datang kembali, ${name}!`;
}

document.addEventListener("DOMContentLoaded", function() {
    const storedName = sessionStorage.getItem("username");
    if (storedName) {
        const welcomeMessage = document.getElementById("welcome-message");
        welcomeMessage.textContent = `Halo, Selamat datang kembali, ${storedName}!`;
    }
});