document.getElementById("sixteenGB").addEventListener("click", function () {
    // const memoryCost = document.getElementById("memory-cost");
    // memoryCost.innerText = 200;

    // const bestPrice = document.getElementById("best-price").innerText;
    // const memoryPrice = document.getElementById("memory-cost").innerText;
    // const storagePrice = document.getElementById("storage-cost").innerText;
    // const deliveryPrice = document.getElementById("delivery-cost").innerText;

    // const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    // const total = document.getElementById("total-price");
    // total.innerText = totalPrice;
    updatePrice("memory-cost", 300);
});

// document.getElementById("eightGB").addEventListener("click", function () {
//     updatePrice("memory-cost", 0);
// });

// document.getElementById("ssd3").addEventListener("click", function () {
//     updatePrice("storage-cost", 500);
// });

// document.getElementById("paid-delivery").addEventListener("click", function () {
//     updatePrice("delivery-cost", 20);
// });

function onClick(clickId, updateId, price) {
    document.getElementById(clickId).addEventListener("click", function () {
        updatePrice(updateId, price);
        //document.getElementById(clickId).style.backgroundColor = "cornflowerblue"
    });
}


onClick("sixteenGB", "memory-cost", 300);
onClick("eightGB", "memory-cost", 0);
onClick("ssd1", "storage-cost", 0);
onClick("ssd2", "storage-cost", 200);
onClick("ssd3", "storage-cost", 400);
onClick("free-delivery", "delivery-cost", 0);
onClick("paid-delivery", "delivery-cost", 20);

