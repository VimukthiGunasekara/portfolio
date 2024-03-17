// scroll animi
const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('scroll-animation');
      }
    });
  });
  
  const viewbox = document.querySelectorAll('.scroll-animi');
  viewbox.forEach(image => {
    observer.observe(image);
  });

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

// Project filter
var filter = (filter) => {
    const cards = document.getElementsByClassName("projects");
    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].querySelector(".card .card-body .card-tag");
        if (title.innerText.indexOf(filter) > -1) {
            cards[i].classList.remove("d-none")
        } else {
            cards[i].classList.add("d-none")
        }
    }
}

var clearAll = () => {
    cards = document.getElementsByClassName("projects")
    for (i = 0; i < cards.length; i++) {
        cards[i].classList.remove("d-none")
    }
}