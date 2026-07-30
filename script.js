// Swirl Society Cart

let cart = [];


const buttons = document.querySelectorAll(".add-to-cart");

const cartContainer = document.getElementById("cart");

const cartTotal = document.getElementById("cart-total");



buttons.forEach(button => {


    button.addEventListener("click", () => {


        const productCard = button.parentElement;


        const productName = productCard.querySelector("h3").innerText;


        let price;


        const option = productCard.querySelector(".product-option");


        if (option) {

            price = Number(option.value);

        } else {

            price = Number(
                productCard.querySelector("strong")
                .innerText
                .replace("$","")
            );

        }



        cart.push({

            name: productName,

            price: price

        });



        updateCart();


    });


});




function updateCart(){


    cartContainer.innerHTML = "";


    let total = 0;



    cart.forEach(item => {


        total += item.price;



        let div = document.createElement("div");


        div.classList.add("cart-item");



        div.innerHTML = `

        <span>${item.name}</span>

        <span>$${item.price}</span>

        `;



        cartContainer.appendChild(div);



    });



    if(cart.length === 0){


        cartContainer.innerHTML =
        "<p>Your cart is currently empty.</p>";


    }



    cartTotal.innerText =
    "Total: $" + total;



}
