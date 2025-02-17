let addButtons = document.querySelectorAll(".fa-plus-circle");
let minusButtons = document.querySelectorAll(".fa-minus-circle");
let quantities = document.querySelectorAll(".quantity");
let price = document.querySelectorAll(".unit-price");
let like = document.querySelectorAll(".fa-heart");
let delBtn = document.querySelectorAll(".fa-trash-alt");
let total = document.querySelector(".total");
let card = document.querySelectorAll(".card-main");

addButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    total.innerText =
      parseInt(price[index].textContent.replace("$", "")) +
      parseInt(total.innerText);
    quantities[index].innerText = parseInt(quantities[index].innerText) + 1;
  });
});

minusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (parseInt(quantities[index].innerText) > 1) {
      total.innerText =
        parseInt(total.innerText) -
        parseInt(price[index].textContent.replace("$", ""));
      quantities[index].innerText = parseInt(quantities[index].innerText) - 1;
    }
  });
});

like.forEach((heart) => {
  heart.addEventListener("click", () => {
    // console.log(heart.style.color);
    if (heart.style.color == "red") {
      heart.style.color = "black";
    } else {
      heart.style.color = "red";
    }
  });
});

delBtn.forEach((del, index) => {
  del.addEventListener("click", () => {
    card[index].style.display = "none";
  });
});
