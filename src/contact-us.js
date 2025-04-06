import "./contact-us.css"

export function load() {
    const content = document.querySelector("div#content");

    // Create heading
    const heading = document.createElement("h1");
    heading.textContent = "Contact Us"
    content.appendChild(heading);

    // Create menu list
    const contactList = document.createElement("div");
    contactList.classList.add("contact-list");

    // Menu items
    const contactItems = [
        {
            name: "Demz The Best",
            email: "real@mail.com",
            phone: "+11231231xxx"
        },
        {
            name: "Kagebunshin The Best",
            email: "real@mail.com",
            phone: "+11231231xxx"
        },
    ]

    for (const item of contactItems) {
        // Add menu item div
        const contactItemDiv = document.createElement("div");
        contactItemDiv.classList.add("item");

        // Create contact name
        const name = document.createElement("h2");
        name.textContent = item.name;

        // Create email
        const email = document.createElement("p");
        email.textContent = "Email: " + item.email;

        // Create phone
        const phone = document.createElement("p");
        phone.textContent = "Phone: " + item.phone;

        contactItemDiv.appendChild(name);
        contactItemDiv.appendChild(email);
        contactItemDiv.appendChild(phone);

        content.appendChild(contactItemDiv);
    }


}