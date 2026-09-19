const cartItems = document.getElementById("cart-items");
const total = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart() {

    cartItems.innerHTML = "";

    let totalPrice = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="text-center text-gray-500 text-xl">
                Your cart is empty.
            </p>
        `;

        total.textContent = "Total: ₦0";

        return;
    }

    cart.forEach((item, index) => {

        const itemTotal = item.price * item.quantity;

        totalPrice += itemTotal;

        cartItems.innerHTML += `

        <div class="bg-white rounded-xl shadow-lg p-5 flex flex-col items-center gap-5">

            <img
                src="${item.image}"
                class="w-75 h-75 object-cover rounded-lg"
            >

            <div class="flex-1">

                <h2 class="text-xl font-bold text-gray-500">
                    ${item.name}
                </h2>

                <p class="text-gray-500">
                    Size: <strong>${item.size}</strong>
                </p>

                

                <p class="text-gray-600 mt-2">
                    ₦${item.price.toLocaleString()}
                </p>

                <div class="flex items-center gap-3 mt-4">

                    <button
                        onclick="decrease(${index})"
                        class="bg-white border text-black dark:bg-black dark:text-white  px-3 py-1 rounded">
                        -
                    </button>

                    <span class="font-semibold">
                        ${item.quantity}
                    </span>

                    <button
                        onclick="increase(${index})"
                        class="bg-white  text-black dark:bg-black dark:text-white border px-3 py-1 rounded">
                        +
                    </button>

                </div>

            </div>

            <div class="text-right">

                <p class="font-bold text-lg text-gray-500">
                    ₦${itemTotal.toLocaleString()}
                </p>

                <button
                    onclick="removeItem(${index})"
                    class="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg">
                    Remove
                </button>

            </div>

        </div>

        <br>

        `;
    });

    total.textContent =
        "Total: ₦" + totalPrice.toLocaleString();

    localStorage.setItem("cart", JSON.stringify(cart));
}

function increase(index) {

    cart[index].quantity++;

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function decrease(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

displayCart();