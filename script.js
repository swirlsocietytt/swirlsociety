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
