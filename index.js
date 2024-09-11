// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Prices for each item
const itemPrices = {
    "Garlic Bread": 30.00,
    "Bruschetta": 35.00,
    "Margherita Pizza": 80.00,
    "Spaghetti Carbonara": 95.00,
    "Tiramisu": 45.00,
    "Cheesecake": 40.00
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuSection = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (const [category, items] of Object.entries(menu)) {

        // Create an element to represent the category
        const categoryElement = document.createElement("div");
        categoryElement.classList.add("menu-category");

        // Set the text content of the category element to the category name
        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = category;

        // Append the category element to the menu container
        categoryElement.appendChild(categoryTitle);

        // Create an element to represent a list of items
        const itemsList = document.createElement("ul");

        // Append a list of items element to the menu container


        // Loop through the items in the category and create list items
        items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.classList.add("menu-item");
            listItem.textContent = `${item}`;


            // Set the text content of the list item element to the item name
            listItem.addEventListener("click", (event) => {
                event.stopPropagation(); 
                addToOrder(item);
            });

            itemsList.appendChild(listItem); // append
        });

            // Append the list item to the list of items
            categoryElement.appendChild(itemsList);
            menuSection.appendChild(categoryElement); // append
    }

            
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");

    // Get the order items list and the order total element from the HTML
    const orderItem = document.createElement("li");
    orderItem.textContent = itemName;

    // Create a list item for the order
    orderItemsList.appendChild(orderItem);

    // Calculate and update the total price
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const newTotal = currentTotal + itemPrices[itemName];

    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = newTotal.toFixed(2);
}


// Function to initialize the menu system

function resetOrder() {
    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");

    // Clear the order items list
    orderItemsList.innerHTML = "";

    // Reset the total to 0
    orderTotalElement.textContent = "0.00";
}

// Function to initialize the menu system
function initMenuSystem() {
    const menuSection = document.getElementById("menu");

    // Display the menu items
    displayMenuItems(menu);

    // Add a click event listener to the menu section to reset the order when clicking on blank space
    menuSection.addEventListener("click", (event) => {
        if (!event.target.classList.contains("menu-item")) {
            resetOrder();
        }
    });
}


// Start the menu system by calling the init function
initMenuSystem();
