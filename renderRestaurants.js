function renderRestaurants(restaurants) {
    let restaurantsHtml = restaurants.map(function(restaurant) {
        const dollarSign = '$';
        return `
        <div class="restaurant-review">
            <div class="restaurant-name">${restaurant.name}</div>
            <div class="restaurant-type">${restaurant.type}</div>
            <div class="restaurant-rating">${dollarSign.repeat(restaurant.priceRating)}</div>
        </div>
        `
    })

    return `
        <div class="text-center mt-5">
            ${restaurantsHtml.join('')}
        </div>
    `
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}