// Function to display average rent cost for the selected city
function showRentCost(city) {
    let rentInfo = document.getElementById('avgrent');

    // Define rent costs for each city
    let rentCosts = {
        Madrid: '$1000',
        Barcelona: '$1200',
        Paris: '$1500',
        London: '$2000',
        Berlin: '$900'
    };

    // Check if the selected city is in the rentCosts object
    if (rentCosts.hasOwnProperty(city)) {
        rentInfo.textContent = `Average rent cost in ${city}: ${rentCosts[city]} per month`;
    } else {
        rentInfo.textContent = 'Average rent cost information not available for this city';
    }
}
