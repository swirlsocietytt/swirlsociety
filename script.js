// Swirl Society Cart System

let cart = [];


const buttons = document.querySelectorAll(".add-to-cart");

const cartContainer = document.getElementById("cart");

const cartTotal = document.getElementById("cart-total");

const checkoutButton = document.querySelector(".checkout-button");




// ADD TO CART

buttons.forEach(button => {


    button.addEventListener("click", function(){


        const productCard = this.closest(".product-card");


        const productName = productCard.querySelector("h3").textContent;


        let productPrice;

        let productOption = "";



        const option = productCard.querySelector(".product-option");


        if(option){

            productPrice = Number(option.value);

            productOption = option.options[option.selectedIndex].text;


        } else {


            productPrice = Number(
                productCard.querySelector("strong")
                .textContent
                .replace("$","")
            );

            productOption = "Standard";

        }




        cart.push({

            name: productName,

            option: productOption,

            price: productPrice,

            quantity: 1

        });



        updateCart();


    });


});






// DISPLAY CART

function updateCart(){


    cartContainer.innerHTML = "";


    let total = 0;



    if(cart.length === 0){


        cartContainer.innerHTML =
        "<p>Your cart is currently empty.</p>";


        cartTotal.textContent = "Total: $0";


        return;

    }




    cart.forEach((item,index)=>{


        let subtotal = item.price * item.quantity;


        total += subtotal;



        let div = document.createElement("div");


        div.className = "cart-item";



        div.innerHTML = `


        <div>

        <strong>${item.name}</strong>

        <br>

        ${item.option}

        <br>

        $${item.price}

        </div>



        <div>

        <button onclick="changeQuantity(${index}, -1)">
        -
        </button>


        ${item.quantity}


        <button onclick="changeQuantity(${index}, 1)">
        +
        </button>


        <br>


        <button onclick="removeItem(${index})">
        Remove
        </button>


        </div>


        `;



        cartContainer.appendChild(div);



    });




    cartTotal.textContent =
    "Total: $" + total;



}






// CHANGE QUANTITY

function changeQuantity(index, amount){


    cart[index].quantity += amount;



    if(cart[index].quantity <= 0){

        cart.splice(index,1);

    }



    updateCart();


}







// REMOVE ITEM

function removeItem(index){


    cart.splice(index,1);


    updateCart();


}







// CHECKOUT

checkoutButton.addEventListener("click", function(){


    if(cart.length === 0){

        alert("Your cart is empty. Please add items before checking out.");

        return;

    }



    let orderSummary = "";



    let total = 0;



    cart.forEach(item=>{


        let subtotal = item.price * item.quantity;


        total += subtotal;



        orderSummary +=
        item.name +
        " - " +
        item.option +
        " x" +
        item.quantity +
        " - $" +
        subtotal +
        "\n";


    });



    orderSummary += "\nTotal: $" + total;



    const formLink =

    "https://docs.google.com/forms/d/e/1FAIpQLSchQS7O81X_frvJ55CgGY2FHhITIOL2kM0c5r2uiqQBhx0qWQ/viewform?usp=pp_url&entry.1365466397="

    + encodeURIComponent(orderSummary);



    window.open(formLink, "_blank");


});
