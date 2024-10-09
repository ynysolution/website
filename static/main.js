// Select the grid element
var grid = document.querySelector('.grid');

// Check if the grid has the 'data-masonry' attribute
if (grid && grid.hasAttribute('data-masonry')) {
    // Parse the JSON from the 'data-masonry' attribute
    var masonryOptions = JSON.parse(grid.getAttribute('data-masonry'));
    
    // Initialize Masonry with the options
    var msnry = new Masonry(grid, masonryOptions);
}


const slider = document.getElementById('clients-slider');
  if (slider){
    const totalTestimonials = slider.children.length;

    let currentIndex = 0;

    function getVisibleTestimonials() {
        return window.innerWidth <= 768 ? 1 : 4; // 1 clients on small screens (<=768px), 3 on larger screens
    }

    function slideTestimonials() {
        const visibleTestimonials = getVisibleTestimonials(); // Dynamically get the number of visible clientss

        // Increment the index to show the next clients
        currentIndex++;

        // If currentIndex exceeds totalTestimonials minus visibleTestimonials, reset it to 0
        if (currentIndex >= totalTestimonials - visibleTestimonials + 1) {
            currentIndex = 0;
        }

        // Move the slider by calculating how much to slide based on the currentIndex
        slider.style.transform = `translateX(-${currentIndex * (100 / visibleTestimonials)}%)`;
    }

    // Run the slideTestimonials function every 5 seconds
    setInterval(slideTestimonials, 1000);

    // Recalculate on window resize to ensure proper behavior when screen size changes
    window.addEventListener('resize', () => {
        currentIndex = 0; // Reset the slider position on resize
        slider.style.transform = `translateX(0)`; // Reset the slider position
    });
}