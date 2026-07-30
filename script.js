// Swirl Society Cart System

let cart = [];

const buttons = document.querySelectorAll(".add-to-cart");

const cartContainer = document.getElementById("cart");

const cartTotal = document.getElementById("cart-total");


// Add items to cart

buttons.forEach(button => {

    button.addEventListener("click", function() {


        const productCard = this.closest(".product-card");


        const productName = productCard.querySelector("h3").textContent;


        let productPrice;

        let productOption = "";



        // Check if product has size options

        const option = productCard.querySelector(".product-option");


        if (option) {

            productPrice = Number(option.value);

            productOption = option.options[option.selectedIndex].text;


        } else {


            productPrice = Number(
                productCard
                .querySelector("strong")
                .textContent
                .replace("$", "")
            );


        }



        cart.push({

            name: productName,

            option: productOption,

            price: productPrice

        });



        updateCart();


    });


});




// Display cart

function updateCart() {


    cartContainer.innerHTML = "";


    let total = 0;



    if (cart.length === 0) {


        cartContainer.innerHTML =
        "<p>Your cart is currently empty.</p>";


    }



    cart.forEach(item => {


        total += item.price;



        const cartItem = document.createElement("div");


        cartItem.className = "cart-item";



        cartItem.innerHTML = `

            <span>
                ${item.name}
                <br>
                ${item.option}
            </span>

            <span>
                $${item.price}
            </span>

        `;



        cartContainer.appendChild(cartItem);


    });



    cartTotal.textContent =
    "Total: $" + total;


}
const checkoutButton = document.querySelector(".checkout-button");


checkoutButton.addEventListener("click", function() {


    let orderSummary = "";


    cart.forEach(item => {

        orderSummary += 
        item.name + " - " + item.option + " - $" + item.price + "\n";

    });


    orderSummary += "\nTotal: $" + cart.reduce(
        (sum, item) => sum + item.price,
        0
    );


    const formLink =
    "https://docs.google.com/forms/d/e/1FAIpQLSchQS7O81X_frvJ55CgGY2FHhITIOL2kM0c5r2uiqQBhx0qWQ/viewform?usp=pp_url&entry.1365466397="
    + encodeURIComponent(orderSummary);



    window.open(formLink, "_blank");


});
