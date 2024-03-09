// rotate text
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");

// change color
const colorCheckbox = document.getElementById('colorCheckbox');

colorCheckbox.addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.style.setProperty('--primary-color', '#f7f9f9'); 
        document.documentElement.style.setProperty('--secondary-color', '#23283e'); 
        document.documentElement.style.setProperty('--background-color', '#d9e8e6'); 
        document.documentElement.style.setProperty('--yellow-color', '#58a4b0'); 
        document.documentElement.style.setProperty('--white-color', '#23283e');         
    } else {
        document.documentElement.style.setProperty('--primary-color', '#23283e');
        document.documentElement.style.setProperty('--secondary-color', '#58a4b0');        
        document.documentElement.style.setProperty('--background-color', '#303755');
        document.documentElement.style.setProperty('--yellow-color', '#dac24d');        
        document.documentElement.style.setProperty('--white-color', '#f7f9f9');
    }
});

const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");
// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}
filterButtons.forEach(button => button.addEventListener("click", filterCards));