// Fetch the JSON data from the 'products.json' file
fetch('products.json')
    .then(response => {
        // Check if the response status is OK (status 200)
        if (!response.ok) {
            // If response is not OK, throw an error
            throw new Error('Network response was not ok');
        }
        // Parse the JSON response and return the parsed data
        return response.json();
    })
    .then(data => {
        // Pass the fetched data to the renderProducts function
        renderProducts(data);
    })
    .catch(error => {
        // If there is any error during the fetch or data processing, log it to the console
        console.error('There was a problem with the fetch operation:', error);
    });

// Function to render the product data to the page
function renderProducts(products) {
    // Get the container element where the product data will be displayed
    const container = document.getElementById('product-container');

    // Clear any existing content in the container
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Loop through the array of products and create HTML elements for each product
    products.forEach(product => {
        // Create a new div element for each product card
        const productDiv = document.createElement('div');
        // Add the 'product' class to the product div for styling
        productDiv.classList.add('product');

        // Create an h2 element for the product name
        const title = document.createElement('h2');
        title.textContent = product.name; // Set the product name text

        // Create a p element for the product price
        const price = document.createElement('p');
        price.textContent = `Price: $${product.price}`; // Set the product price text

        // Create a p element for the stock status
        const stockStatus = document.createElement('p');
        stockStatus.textContent = `In Stock: ${product.inStock ? 'Yes' : 'No'}`; // Set stock status text
        // Add a class to stockStatus to style it based on the availability
        stockStatus.classList.add(product.inStock ? 'in-stock' : 'out-of-stock'); // Apply appropriate class

        // Append the created elements to the productDiv
        productDiv.appendChild(title); // Add product name (h2)
        productDiv.appendChild(price); // Add product price (p)
        productDiv.appendChild(stockStatus); // Add stock status (p)

        // Finally, append the productDiv to the container to display it on the page
        container.appendChild(productDiv);
    });
}
