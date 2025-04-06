import "./home.css"
import homeImageSrc from "./restaurant-homepage.jpg";

export function load() {
    const content = document.querySelector("div#content");

    // Create heading
    const heading = document.createElement("h1");
    heading.textContent = "Sienna Ristorante"

    // Create image
    const homeImage = document.createElement("img");
    homeImage.src = homeImageSrc;

    // Create description text
    const desc = document.createElement("p");
    desc.textContent = "This is the best restaurant in Italy! Come and experience a diverse range of cuisine from Pizzas to... Pizzaas??!?!";

    // Append elements to div#content
    content.appendChild(heading);
    content.appendChild(homeImage);
    content.appendChild(desc);
}