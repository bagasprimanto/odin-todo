import "./menu.css"

export function load() {
    const content = document.querySelector("div#content");

    // Create heading
    const heading = document.createElement("h1");
    heading.textContent = "Our Menu"
    content.appendChild(heading);

    // Create menu list
    const menuList = document.createElement("div");
    menuList.classList.add("menu-list");

    // Menu items
    const menuItems = [
        {
            title: "Peperoni Pizza",
            price: "$15",
            desc: "Meaty pizza with lots of cheese on top"
        },
        {
            title: "Pasta Aglio e Olio",
            price: "$8",
            desc: "Spaghetti with olive oil, fresh garlic, and chili flakes. Perfect to cleanse your palette."
        },
        {
            title: "Spaghetti Carbonara",
            price: "$12",
            desc: "Spaghetti with creamy egg sauce, with a drizzle of olive oil and parmesan cheese. Bacon added on top!"
        }
    ]

    for (const item of menuItems) {
        // Add menu item div
        const menuItemDiv = document.createElement("div");
        menuItemDiv.classList.add("item");

        // Create top menu div
        const topDiv = document.createElement("div");
        topDiv.classList.add("top");

        // Create menu title
        const title = document.createElement("h2");
        title.textContent = item.title;

        // Create price
        const price = document.createElement("h2");
        price.textContent = item.price;

        topDiv.appendChild(title);
        topDiv.appendChild(price);

        menuItemDiv.appendChild(topDiv);

        // Create description
        const desc = document.createElement("p");
        desc.textContent = item.desc;

        menuItemDiv.appendChild(desc);
        menuList.appendChild(menuItemDiv);
    }

    content.appendChild(menuList);
}